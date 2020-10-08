import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// You will have to configure ApolloClient To get it working
// The url of the schema is => localhost:4000/graphql
// The import remains here to give you some hints on what to use

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
