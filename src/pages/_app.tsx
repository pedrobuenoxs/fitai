import "../styles/globals.css";
import Layout from "../components/Layout";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }: any) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}

export default MyApp;
