import { useContext } from "react";
import Head from "next/head";

//* components *//
import { Header } from "../ui";

//* context *//
import { HeaderContext } from "../../context/HeaderContext";

const origin = typeof window === "undefined" ? "" : window.location.origin;

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  const { showSidebar } = useContext(HeaderContext);

  return (
    <>
      <Head>
        <title>{title || "Pokedex TC"}</title>
        <meta name="author" content="Tomas Cuevas" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
        <meta property="twitter:image" content={`${origin}/img/banner.png`} />
        <link
          rel="shortcut icon"
          href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
          type="image/x-icon"
        />
      </Head>

      <Header />
      <main
        className={
          showSidebar
            ? "hidden lg:block lg:min-h-[calc(100vh_-_80px)] lg:overflow-x-hidden lg:bg-slate-500 lg:py-5 lg:pb-7"
            : "min-h-[calc(100vh_-_60px)] overflow-x-hidden bg-slate-500 py-5 pb-7 sm:min-h-[calc(100vh_-_80px)]"
        }
      >
        {children}
      </main>
    </>
  );
};
