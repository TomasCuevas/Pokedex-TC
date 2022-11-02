import { useContext } from "react";
import NextLink from "next/link";

//* icons *//
import { MdOutlineMenu } from "react-icons/md";

//* components *//
import { Searcher, TypesOfPokemonNavbar } from "./";
import { Sidebar } from "../sidebar";

//* context *//
import { HeaderContext } from "../../../context/HeaderContext";

export const Header: React.FC = () => {
  const { showSidebar, onToggleSidebar } = useContext(HeaderContext);

  return (
    <header className="sticky top-0 z-20 flex h-[60px] w-full items-center justify-start bg-gray-900 px-7 py-2 sm:h-[80px]">
      <section className="flex items-center">
        <NextLink href="/" passHref>
          <a>
            <h1 className="text-2xl font-thin leading-[50px] tracking-tighter text-white duration-300 first-letter:text-5xl first-letter:font-semibold hover:text-slate-300">
              Pokedex TC
            </h1>
          </a>
        </NextLink>
      </section>

      <TypesOfPokemonNavbar />

      <Searcher />

      <NextLink href="/favorites" passHref>
        <a className="hidden lg:flex">
          <button className="favorite-gradient rounded-xl px-12 py-2 text-base font-medium tracking-[1px] text-slate-100 transition-all duration-300 hover:rotate-1 hover:scale-[102%]">
            Favoritos
          </button>
        </a>
      </NextLink>

      <MdOutlineMenu
        className="ml-auto cursor-pointer text-4xl text-white lg:hidden"
        onClick={onToggleSidebar}
      />
      {showSidebar ? <Sidebar /> : null}
    </header>
  );
};
