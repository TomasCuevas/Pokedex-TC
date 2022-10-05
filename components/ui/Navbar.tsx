import { Text, Spacer, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

//* icons *//
import { MdFavorite } from "react-icons/md";

//* components *//
import { Searcher } from "./";

export const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-start px-7 py-2 bg-gray-800 sticky top-0 z-10">
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
            className="text-2xl first-letter:text-5xl first-letter:font-semibold tracking-[1px] pl-1 font-light hover:text-slate-300 duration-300"
            h3
          >
            Pokedex TC
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <Searcher />
      <NextLink href="/favorites">
        <Link>
          <Text
            color="white"
            className="flex items-center gap-1 font-bold text-lg"
          >
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
