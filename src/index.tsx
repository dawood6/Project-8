import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
import * as serviceWorker from './serviceWorker';

const Client = new ApolloClient({
  uri: "https://spacexdata.herokuapp.com/graphql",
  cache: new InMemoryCache()
})
ReactDOM.render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
