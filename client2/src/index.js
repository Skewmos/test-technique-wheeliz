import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'bootstrap/dist/css/bootstrap.min.css';

// You will have to configure ApolloClient To get it working

const link  = createHttpLink({ uri: "http://localhost:4000/graphql" })
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});



ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById("root")
);

// The url of the schema is => localhost:4000/graphql
// The import remains here to give you some hints on what to use