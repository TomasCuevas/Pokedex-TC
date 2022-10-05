/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Link } from "@nextui-org/react";

//* icons *//
import { MdSearch } from "react-icons/md";

//* hooks *//
import { useSearch } from "../../hooks";
import { useRouter } from "next/router";

export const Searcher: React.FC = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const { results, clear } = useSearch(search);

  useEffect(() => {
    clear();
    setSearch("");
  }, [router.asPath]);

  return (
    <div className="mr-20 relative flex items-center bg-slate-300 py-1 pl-3 rounded-lg shadow-md shadow-slate-900">
      <MdSearch className="text-slate-500 text-xl" />
      <input
        className="text-slate-900 text-base font-semibold pr-3 pl-1 bg-white/0 border-none outline-none"
        type="text"
        placeholder="Buscar pokemon"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      {results.length > 1 && (
        <ul className="border-white border absolute top-10 right-0 w-full flex flex-col bg-gray-800 rounded-lg overflow-hidden">
          {results.map((pokemon) => (
            <NextLink
              key={pokemon.id}
              href={`/pokemon/${pokemon.name}`}
              passHref
            >
              <Link className="flex min-w-full text-white">
                <li className="flex items-center border-b border-white w-full px-2 h-12 gap-3 m-0">
                  <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                    alt={pokemon.name}
                    height="30px"
                    width="30px"
                  />
                  <p className="capitalize">{pokemon.name}</p>
                </li>
              </Link>
            </NextLink>
          ))}
        </ul>
      )}
    </div>
  );
};
