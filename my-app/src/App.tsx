import "./App.css";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { useState } from "react";

function App() {

  const [isUnderMaintenance, setIsUnderMaintenance] = useState<boolean>(false);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:8080/v1/graphql",
  });

  const GET_SETTINGS = gql`
    query {
      settings {
        id
        is_under_maintenance
      }
    }
  `;

  client.query({
    query: GET_SETTINGS
  }).then((results) => {
    setIsUnderMaintenance(results.data?.settings[0]?.is_under_maintenance)
  })

  return (
    <div className="App">
      <header className="App-header">
          {isUnderMaintenance ? (
            <div>Website is under maintenance</div>
          ) : (
            <div>Webite is Running</div>
          ) }
      </header>
    </div>
  );
}

export default App;
