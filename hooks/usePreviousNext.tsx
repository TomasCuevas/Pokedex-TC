/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

//* api *//
import { pokeApi } from "../axios";

//* interface *//
import { PokemonListResponse } from "../interfaces";

export const usePreviousNext = (name: string) => {
  const [previous, setPrevious] = useState<string>();
  const [next, setNext] = useState<string>();

  const getPreviousAndNext = async () => {
    const {
      data: { results: allPokemons },
    } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=900&offset=0");

    let previousAndNext: { previous?: string; next?: string };

    allPokemons.forEach((pokemon, index) => {
      if (pokemon.name === name) {
        previousAndNext = {
          previous: allPokemons[index - 1]?.name || undefined,
          next: allPokemons[index + 1]?.name || undefined,
        };
      }
    });

    previousAndNext!.previous
      ? setPrevious(previousAndNext!.previous)
      : setPrevious(undefined);
    previousAndNext!.next
      ? setNext(previousAndNext!.next)
      : setPrevious(undefined);
  };

  useEffect(() => {
    getPreviousAndNext();
  }, [name]);

  return {
    previous,
    next,
  };
};
