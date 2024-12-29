import type { AppProps } from "next/app";
import RootLayout from "@/components/layouts/rootLayout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}