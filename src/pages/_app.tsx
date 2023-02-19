import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import client from "../../apollo-client";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MeshProvider>
      <ApolloProvider client={client}>
        <ChakraProvider>
          <Navbar />
          <Box bg="#232323" color="white" minH="100vh">
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      </ApolloProvider>
    </MeshProvider>
  );
}

export default MyApp;
