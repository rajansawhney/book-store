import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from 'apollo-boost';
import BooksList from './components/books';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <h2>GraphQL + Apollo + React</h2>
          </div>
          <BooksList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
