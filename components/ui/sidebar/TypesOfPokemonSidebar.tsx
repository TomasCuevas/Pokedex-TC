import { useContext } from "react";
import NextLink from "next/link";

//* context /
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

export const TypesOfPokemonSidebar = () => {
  const { onToggleSidebar } = useContext(HeaderContext);

  return (
    <div className="mt-4">
      <ul className="mx-auto grid max-w-[320px] grid-cols-2 gap-2 overflow-auto rounded-xl bg-slate-300/80 py-2 px-5 shadow-lg shadow-gray-900">
        {types.map(({ type }) => (
          <NextLink key={type} href={`/pokemon/types/${type}`}>
            <a className="group cursor-pointer overflow-hidden rounded-xl">
              <li
                onClick={onToggleSidebar}
                className="flex items-center justify-start gap-2 px-1 transition-all duration-300 group-hover:bg-slate-900"
              >
                <img
                  src={`/img/types/${type}.png`}
                  alt={type}
                  width={50}
                  height={50}
                />
                <span className="font-semibold capitalize text-slate-900 transition-all duration-300 group-hover:text-slate-100">
                  {type}
                </span>
              </li>
            </a>
          </NextLink>
        ))}
      </ul>
    </div>
  );
};
