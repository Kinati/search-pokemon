import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default client;
