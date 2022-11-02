import { useContext } from "react";
import NextLink from "next/link";
import Image from "next/future/image";

//* icons *//
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

//* context *//
import { HeaderContext } from "../../../context/HeaderContext";

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
  const { showPokemonTypes, onTogglePokemonTypes } = useContext(HeaderContext);

  return (
    <section className="mr-5 ml-auto hidden py-1 px-5 lg:flex">
      <div
        onClick={onTogglePokemonTypes}
        className="flex cursor-pointer items-center gap-1"
      >
        <MdOutlineArrowDropDown
          className={showPokemonTypes ? "text-2xl text-slate-100" : "hidden"}
        />
        <MdOutlineArrowDropUp
          className={showPokemonTypes ? "hidden" : "text-2xl text-slate-100"}
        />
        <p className="font-bold text-slate-100">Tipos de Pokemons</p>
      </div>
      <div
        onClick={onTogglePokemonTypes}
        className={
          showPokemonTypes
            ? "absolute left-0 top-0 z-30 h-screen w-screen bg-slate-900 opacity-60"
            : "hidden"
        }
      />
      <ul
        className={
          showPokemonTypes
            ? "absolute top-[90px] left-[5%] right-[5%] z-50 m-0 mx-auto flex flex-wrap justify-center gap-[10px] rounded-xl bg-slate-300/80 py-2 px-5 shadow-lg shadow-gray-900"
            : "hidden"
        }
      >
        {types.map(({ type }) => (
          <NextLink key={type} href={`/pokemon/types/${type}`}>
            <a className="group cursor-pointer overflow-hidden rounded-xl">
              <li
                onClick={onTogglePokemonTypes}
                className="flex items-center justify-center gap-2 px-3 transition-all duration-300 group-hover:bg-slate-900"
              >
                <Image
                  src={`/img/types/${type}.png`}
                  alt={type}
                  className="h-[50px] w-[50px]"
                  width={0}
                  height={0}
                  sizes="100%"
                  quality={60}
                />
                <span className="font-semibold capitalize text-slate-900 transition-all duration-300 group-hover:text-slate-100">
                  {type}
                </span>
              </li>
            </a>
          </NextLink>
        ))}
      </ul>
    </section>
  );
};
