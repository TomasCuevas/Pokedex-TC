import { useContext } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Text, Spacer, Link, Button } from "@nextui-org/react";

//* icons *//
import { MdOutlineMenu } from "react-icons/md";

//* components *//
import { Searcher, Sidebar } from "./";

//* context *//
import { NavbarContext } from "../../context/NavbarContext";

export const Navbar: React.FC = () => {
  const { isSidebar, onToggleSidebar } = useContext(NavbarContext);

  return (
    <div className="sticky top-0 z-10 flex w-full items-center justify-start bg-gray-800 px-7 py-2">
      <NextLink href="/">
        <Link>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="icono de la app"
            width={70}
            height={70}
          />
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
      <MdOutlineMenu className="text-4xl lg:hidden" onClick={onToggleSidebar} />
      {isSidebar && <Sidebar />}
      <Searcher />
      <NextLink href="/favorites" passHref>
        <Link className="hidden lg:flex">
          <Button color="gradient">Favoritos</Button>
        </Link>
      </NextLink>
    </div>
  );
};
