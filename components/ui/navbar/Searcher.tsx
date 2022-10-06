/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import NextLink from "next/link";
import { Link } from "@nextui-org/react";

//* icons *//
import { MdSearch } from "react-icons/md";

//* hooks *//
import { useSearch } from "../../../hooks";
import { useRouter } from "next/router";

export const Searcher: React.FC = () => {
  const router = useRouter();

  const [search, setSearch] = useState<string>("");
  const { results, visible, onClear, onChangeVisibility } = useSearch(search);

  useEffect(() => {
    onClear();
    setSearch("");
  }, [router.asPath]);

  return (
    <div className="relative hidden items-center rounded-lg bg-slate-300 py-1 px-3  shadow-md shadow-slate-900 lg:mr-8 lg:flex xl:mr-20">
      <MdSearch className="text-xl text-slate-500" />
      <input
        className="border-none bg-white/0 pr-3 pl-1 text-base font-semibold text-slate-900 outline-none"
        type="text"
        placeholder="Buscar pokemon"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        onBlur={() => {
          setTimeout(() => {
            onChangeVisibility();
          }, 100);
        }}
        onFocus={() => {
          setTimeout(() => {
            onChangeVisibility();
          }, 100);
        }}
      />

      {visible && (
        <ul className="absolute top-10 right-0 m-0 flex w-full flex-col overflow-hidden rounded-lg bg-slate-300">
          {results.map((pokemon) => (
            <NextLink
              key={pokemon.id}
              href={`/pokemon/${pokemon.name}`}
              passHref
            >
              <Link className="flex min-w-full text-white">
                <li className="m-0 flex h-12 w-full items-center gap-3 border-b border-white px-2">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                    alt={pokemon.name}
                    className="h-[30px] w-[30px]"
                  />
                  <p className="font-semibold capitalize text-slate-900">
                    {pokemon.name}
                  </p>
                </li>
              </Link>
            </NextLink>
          ))}
        </ul>
      )}
    </div>
  );
};
