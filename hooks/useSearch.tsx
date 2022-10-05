/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

//* api *//
import { pokeApi } from "../axios";

//* interface *//
import { PokemonListResponse } from "../interfaces";

interface results {
  name: string;
  id: string;
}

export const useSearch = (toSearch: string) => {
  const [results, setResults] = useState<results[]>([]);

  const getPokemonSearcher = async () => {
    if (toSearch.length < 1) {
      return setResults([]);
    }

    const { data } = await pokeApi.get<PokemonListResponse>(
      "/pokemon?limit=10000"
    );

    let allIncludes: results[] = [];
    data.results.forEach((pokemon) => {
      if (
        pokemon.name.includes(toSearch.toLowerCase()) &&
        allIncludes.length < 15
      ) {
        const name = pokemon.name;
        const id = pokemon.url.split("/").at(-2)!;
        allIncludes.push({ name, id });
      }
    });

    setResults(allIncludes);
  };

  const clear = () => setResults([]);

  useEffect(() => {
    getPokemonSearcher();
  }, [toSearch]);

  return {
    // properties
    results,

    // methods
    clear,
  };
};
