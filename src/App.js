import React, { Component } from "react";
import "./App.css";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Myrepos from "./my-repos";

const query = gql`
  {
    viewer {
      name
      email
    }
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Query query={query}>
          {result => {
            if (result.loading) return <p>...loading</p>;
            if (result.error) return <p>{result.error.message}</p>;
            return (
              <div>
                <header className="App__header">
                  <h1>Name: {result.data.viewer.name}</h1>
                  <h2>Email: {result.data.viewer.email}</h2>
                </header>
                <Myrepos />
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;
