import React from "react";
import { render } from "react-dom";
import App from "./App";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const auth = `Bearer ${process.env.REACT_APP_GITHUB}`;

//console.log(auth);

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: auth
      }
    });
  }
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
