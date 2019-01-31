import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const reposQuery = gql`
  {
    viewer {
      repositories(first: 10) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;

class Myrepos extends Component {
  render() {
    return (
      <Query query={reposQuery}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading</p>;
          if (error) return <p>{error.message}</p>;
          return (
            <ul>
              <h2>First Ten Repos</h2>
              {data.viewer.repositories.edges.map(({ node }) => (
                <li key={node.name}>{node.name}</li>
              ))}
            </ul>
          );
        }}
      </Query>
    );
  }
}

export default Myrepos;
