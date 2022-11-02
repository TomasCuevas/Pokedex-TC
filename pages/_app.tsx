import { AppProps } from "next/app";
import { SWRConfig } from "swr";

//* providers *//
import { FavoritesProvider, HeaderProvider } from "../context";

//* theme and styles *//
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <HeaderProvider>
        <FavoritesProvider>
          <Component {...pageProps} />
        </FavoritesProvider>
      </HeaderProvider>
    </SWRConfig>
  );
}

export default MyApp;
