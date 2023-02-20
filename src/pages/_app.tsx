import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import client from "../../apollo-client";
import Navbar from "../components/navbar";

const theme = extendTheme({
  colors: {
    theme: {
      dark: "#343434",
      white: "#eeeeee",
      light: "#BBAAEE",
      blue: "#4CB5F5",
      green: "#6AB187",
      lightGray: "#A0AEC0",
      darkGray: "#1A202C"

    }
  },
  styles: {
    global: {
      ".mdx-content": {
        h1: {
          fontSize: "4xl",
          fontWeight: "900",
          mb: "4",
          color: "theme.blue"
        },
        p: {
          fontSize: "lg",
          lineHeight: "1.4",
        },
        ul: {
          ml: "6"
        },
        li: {
          pl: "2",
          py: "2",
          listStyleType: "square"
        }
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MeshProvider>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <Box bg="#232323" color="white" minH="100vh">
            <Navbar />
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      </ApolloProvider>
    </MeshProvider>
  );
}

export default MyApp;
