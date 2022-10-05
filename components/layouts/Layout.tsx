import Head from "next/head";

//* provider *//
import { NavbarProvider } from "../../context";

//* components *//
import { Navbar } from "../ui";

const origin = typeof window === "undefined" ? "" : window.location.origin;

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export const Layout: React.FC<Props> = ({ children, title }) => {
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

      <NavbarProvider>
        <Navbar />
      </NavbarProvider>
      <main className="overflow-x-hidden py-5 pb-7">{children}</main>
    </>
  );
};
