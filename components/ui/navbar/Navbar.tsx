import { useContext } from "react";
import NextLink from "next/link";
import { Text, Spacer, Link, Button } from "@nextui-org/react";

//* icons *//
import { MdOutlineMenu } from "react-icons/md";

//* components *//
import { Searcher, TypesOfPokemonNavbar } from "./";
import { Sidebar } from "../sidebar";

//* context *//
import { NavbarContext } from "../../../context/NavbarContext";

export const Navbar: React.FC = () => {
  const { showSidebar, onToggleSidebar } = useContext(NavbarContext);

  return (
    <div className="sticky top-0 z-20 flex w-full items-center justify-start bg-gray-900 px-7 py-2">
      <NextLink href="/" passHref>
        <Link>
          <Text
            color="white"
            className="text-2xl font-light tracking-[1px] duration-300 first-letter:text-5xl first-letter:font-semibold hover:text-slate-300"
            h3
          >
            Pokedex TC
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <TypesOfPokemonNavbar />

      <MdOutlineMenu className="text-4xl lg:hidden" onClick={onToggleSidebar} />
      {showSidebar && <Sidebar />}

      <Searcher />

      <NextLink href="/favorites" passHref>
        <Link className="hidden lg:flex">
          <Button type="button" color="gradient">
            Favoritos
          </Button>
        </Link>
      </NextLink>
    </div>
  );
};
