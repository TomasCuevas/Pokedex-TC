import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

//* icons *//
import { MdSearch } from "react-icons/md";

//* hooks *//
import { useSearch } from "../../../hooks";

//* context *//
import { HeaderContext } from "../../../context/HeaderContext";

export const SearcherSidebar: React.FC = () => {
  const router = useRouter();
  const { onToggleSidebar } = useContext(HeaderContext);
  const [search, setSearch] = useState<string>("");
  const { results, visible, onClear, onChangeVisibility } = useSearch(search);

  useEffect(() => {
    onClear();
    setSearch("");
  }, [router.asPath]);

  return (
    <div className="relative flex items-center rounded-lg bg-slate-300 py-1 pl-3 shadow-md shadow-slate-700">
      <MdSearch className="text-xl text-slate-900" />
      <input
        className="border-none bg-white/0 pr-3 pl-1 text-base font-semibold text-slate-900 outline-none placeholder:text-slate-400"
        type="text"
        placeholder="Buscar pokemon"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        onBlur={() => {
          setTimeout(() => {
            onChangeVisibility();
          }, 300);
        }}
        onFocus={() => {
          setTimeout(() => {
            onChangeVisibility();
          }, 300);
        }}
      />

      {visible && (
        <ul className="absolute top-10 right-0 z-50 m-0 flex w-full flex-col overflow-hidden rounded-lg bg-slate-300 shadow-md">
          {results.map((pokemon) => (
            <NextLink
              key={pokemon.id}
              href={`/pokemon/${pokemon.name}`}
              passHref
            >
              <a className="group">
                <li
                  onClick={() => {
                    setTimeout(() => {
                      onToggleSidebar();
                    }, 300);
                  }}
                  className="m-0 flex h-12 w-full min-w-full items-center gap-3 border-b border-slate-900 bg-slate-300 px-2 transition-all duration-300 group-hover:border-b-white group-hover:bg-slate-400"
                >
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                    alt={pokemon.name}
                    className="h-[30px] w-[30px]"
                  />
                  <p className="font-semibold capitalize text-slate-900 group-hover:text-white">
                    {pokemon.name}
                  </p>
                </li>
              </a>
            </NextLink>
          ))}
        </ul>
      )}
    </div>
  );
};
