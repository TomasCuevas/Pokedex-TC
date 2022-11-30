import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/future/image";

//* icons *//
import { MdSearch } from "react-icons/md";

//* hooks *//
import { useSearch } from "../../../hooks";

export const Searcher: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const { results, visible, onClear, onChangeVisibility } = useSearch(search);

  const router = useRouter();

  useEffect(() => {
    onClear();
    setSearch("");
  }, [router.asPath]);

  return (
    <section className="relative hidden items-center rounded-lg bg-slate-300 py-1 px-3  shadow-md shadow-slate-700 lg:mr-8 lg:flex xl:mr-16">
      <MdSearch className="text-xl text-slate-900" />
      <input
        className="border-none bg-white/0 pr-3 pl-2 text-base font-semibold text-slate-900 outline-none placeholder:text-slate-400"
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
        <ul className="absolute top-10 right-0 m-0 flex w-full flex-col overflow-hidden rounded-lg">
          {results.map((pokemon) => (
            <NextLink
              key={pokemon.id}
              href={`/pokemon/${pokemon.name}`}
              passHref
            >
              <a className="group">
                <li className="m-0 flex h-12 w-full min-w-full items-center gap-3 border-b border-slate-900 bg-slate-300 px-2 transition-all duration-300 group-hover:border-b-white group-hover:bg-slate-400">
                  <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                    alt={pokemon.name}
                    className="h-[30px] w-[30px]"
                    width={0}
                    height={0}
                    sizes="100%"
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
    </section>
  );
};
