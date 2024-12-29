import { ApolloProvider } from "@apollo/client";
import client from "@/config/apollo";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </Head>
      <div> {children}</div>
    </ApolloProvider>
  );
}
