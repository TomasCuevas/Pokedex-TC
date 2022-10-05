/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

//* api *//
import { pokeApi } from "../axios";

//* interface *//
import { PokemonListResponse } from "../interfaces";

interface PreviousAndNext {
  previous: string;
  next: string;
}

export const usePreviousNext = (name: string) => {
  const [previous, setPrevious] = useState<string>();
  const [next, setNext] = useState<string>();

  const getPreviousAndNext = async () => {
    const {
      data: { results: allPokemons },
    } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=900&offset=0");

    let previousAndNext: PreviousAndNext = { previous: "", next: "" };

    allPokemons.forEach((pokemon, index) => {
      if (pokemon.name === name) {
        previousAndNext = {
          previous: allPokemons[index - 1]?.name,
          next: allPokemons[index + 1]?.name,
        };
      }
    });

    previousAndNext?.previous
      ? setPrevious(previousAndNext!.previous)
      : setPrevious(undefined);
    previousAndNext?.next
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
