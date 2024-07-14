# cypress-hasura-pipeline
This project simulates a CI/CD pipeline with Hasura and Cypress as testing framework

## 1. Install the project
```
npm i
```

## 2. Initialize database
```
cd hasura
npm run init
```

## 3. Run hasura Console
```
cd hasura
npm run console 
```

## 4. Run the project
```
npm start
```

## 5. Test actions
Setup a new github repository, and push it into main branch.

Then create a branch, change something and send a pull request to see how github tests the project in actions tab.