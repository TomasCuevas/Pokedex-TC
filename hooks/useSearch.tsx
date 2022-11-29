/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

//* api *//
import { pokeApi } from "../axios";

//* interface *//
import { IPokemonListResponse } from "../interfaces/pokemonList";

interface results {
  name: string;
  id: string;
}

export const useSearch = (toSearch: string) => {
  const [results, setResults] = useState<results[]>([]);
  const [visible, setVisible] = useState(false);

  const getPokemonSearcher = async () => {
    if (toSearch.length < 1) {
      setVisible(false);
      setResults([]);
      return;
    }

    const { data } = await pokeApi.get<IPokemonListResponse>(
      "/pokemon?limit=10000"
    );

    let allIncludes: results[] = [];
    data.results.forEach((pokemon) => {
      if (
        pokemon.name.includes(toSearch.toLowerCase()) &&
        allIncludes.length < 10
      ) {
        const name = pokemon.name;
        const id = pokemon.url.split("/").at(-2)!;
        allIncludes.push({ name, id });
      }
    });

    setResults(allIncludes);
    setVisible(true);
  };

  const onChangeVisibility = () => setVisible((prev) => !prev);

  const onClear = () => {
    setVisible(false);
    setResults([]);
  };

  useEffect(() => {
    getPokemonSearcher();
  }, [toSearch]);

  return {
    // properties
    results,
    visible,

    // methods
    onClear,
    onChangeVisibility,
  };
};
