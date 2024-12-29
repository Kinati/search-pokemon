import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_URL = "https://graphql-pokemon2.vercel.app";

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default client;
