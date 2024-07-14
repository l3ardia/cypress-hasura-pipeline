# uncomment these lines in order to remove docker containers
# warning! these lines of code will remove any docker containers and volumes

#echo "resetting docker containers and volumes"
#docker rm -vf $(docker ps -aq) || true
#docker volume rm $(docker volume ls -q) || true

echo "starting docker compose"
docker compose up -d

sleep 5

count=1
while [[ $count -le 40 ]] && ! $(curl --output /dev/null --fail --silent http://localhost:8080/healthz)
do
     echo "attempt #${count} waiting for Hasura to be up..."
     ((count+=1))
     sleep 1
done

hasura migrate apply --endpoint http://localhost:8080 --admin-secret secret --database-name default
hasura metadata apply --endpoint http://localhost:8080 --admin-secret secret
hasura seed apply --endpoint http://localhost:8080 --admin-secret secret --database-name default

