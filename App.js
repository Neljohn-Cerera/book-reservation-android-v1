import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "react-native-elements";
import Main from "./src/Main";
import store from "./src/redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://book-reservation-server-v1.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <ApolloProvider client={client}>
              <Main />
            </ApolloProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </PaperProvider>
    </Provider>
  );
}
