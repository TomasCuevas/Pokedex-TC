import { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { NextUIProvider } from "@nextui-org/react";

//* theme and styles *//
import { darkTheme } from "../themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </SWRConfig>
  );
}

export default MyApp;
