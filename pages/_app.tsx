import { AppProps } from "next/app";
import Head from "next/head";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//* providers *//
import { FavoritesProvider, HeaderProvider } from "../context";

//* theme and styles *//
import "../styles/globals.css";

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <HeaderProvider>
        <FavoritesProvider>
          <Head>
            <link
              rel="shortcut icon"
              href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
              type="image/x-icon"
            />
          </Head>
          <Component {...pageProps} />
        </FavoritesProvider>
      </HeaderProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
