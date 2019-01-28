import React from "react";
import { render } from "react-dom";
import App from "./App";
import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `b7fee35d36381bd5af284eae5859a94d2d24f317`
      }
    });
  }
});

client
  .query({
    query: gql`
      query GetnameandEmail {
        viewer {
          email
          name
        }
      }
    `
  })
  .then(res => console.log(res));

render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
