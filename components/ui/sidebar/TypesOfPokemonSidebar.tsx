import { useContext } from "react";
import NextLink from "next/link";
import { Link } from "@nextui-org/react";

//* context /
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

export const TypesOfPokemonSidebar = () => {
  const { onToggleSidebar } = useContext(NavbarContext);

  return (
    <div className="mt-4">
      <ul className="mx-auto grid max-w-[300px] grid-cols-2 gap-2 overflow-auto rounded-xl bg-slate-300/80 py-2 px-5 shadow-sm">
        {types.map(({ type }) => (
          <NextLink key={type} href={`/pokemon/types/${type}`}>
            <Link>
              <li
                onClick={onToggleSidebar}
                className="flex items-center justify-center gap-2"
              >
                <img
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
