import { useContext } from "react";
import Head from "next/head";

//* components *//
import { Navbar } from "../ui";

//* context *//
import { NavbarContext } from "../../context/NavbarContext";

const origin = typeof window === "undefined" ? "" : window.location.origin;

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  const { showSidebar } = useContext(NavbarContext);

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
      </Head>

      <Navbar />
      <main
        className={
          showSidebar
            ? "hidden lg:block lg:min-h-[calc(100vh_-_86px)] lg:overflow-x-hidden lg:bg-slate-500 lg:py-5 lg:pb-7"
            : "min-h-[calc(100vh_-_86px)] overflow-x-hidden bg-slate-500 py-5  pb-7"
        }
      >
        {children}
      </main>
    </>
  );
};
