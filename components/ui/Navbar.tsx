import { Text, Spacer, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import { MdFavorite } from "react-icons/md";

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
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okedex TC
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites">
        <Link>
          <Text
            color="white"
            className="flex items-center gap-1 font-bold text-lg"
          >
            Favoritos
            <MdFavorite />
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
