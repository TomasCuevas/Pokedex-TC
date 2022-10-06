import { useContext } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Link } from "@nextui-org/react";

//* icons *//
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

//* context *//
import { NavbarContext } from "../../../context/NavbarContext";

//* types *//
const types = [
  { type: "normal" },
  { type: "fighting" },
  { type: "flying" },
  { type: "poison" },
  { type: "ground" },
  { type: "rock" },
  { type: "bug" },
  { type: "ghost" },
  { type: "steel" },
  { type: "fire" },
  { type: "water" },
  { type: "grass" },
  { type: "electric" },
  { type: "psychic" },
  { type: "ice" },
  { type: "dragon" },
  { type: "dark" },
  { type: "fairy" },
];

export const TypesOfPokemonNavbar = () => {
  const { showPokemonTypes, onTogglePokemonTypes } = useContext(NavbarContext);

  return (
    <div className="mr-5 hidden py-1 px-5 lg:flex">
      <div onClick={onTogglePokemonTypes} className="flex items-center gap-1">
        <MdOutlineArrowDropDown
          className={showPokemonTypes ? "text-2xl" : "hidden"}
        />
        <MdOutlineArrowDropUp
          className={showPokemonTypes ? "hidden" : "text-2xl"}
        />
        <p className="cursor-pointer font-bold">Tipos de Pokemones</p>
      </div>
      <div
        onClick={onTogglePokemonTypes}
        className={
          showPokemonTypes
            ? "absolute left-0 top-0 z-30 h-screen w-screen bg-slate-900 opacity-30"
            : "hidden"
        }
      ></div>
      <ul
        className={
          showPokemonTypes
            ? "absolute top-[86px] left-[5%] right-[5%] z-50 m-0 mx-auto flex flex-wrap justify-center gap-8 rounded-xl bg-slate-300/80 py-2 px-5 shadow-md shadow-gray-900"
            : "hidden"
        }
      >
        {types.map(({ type }) => (
          <NextLink key={type} href={`/pokemon/types/${type}`}>
            <Link>
              <li
                onClick={onTogglePokemonTypes}
                className="flex items-center justify-center gap-2"
              >
                <Image
                  src={`/img/types/${type}.png`}
                  alt={type}
                  width={50}
                  height={50}
                />
                <span className="font-semibold capitalize text-slate-900">
                  {type}
                </span>
              </li>
            </Link>
          </NextLink>
        ))}
      </ul>
    </div>
  );
};
