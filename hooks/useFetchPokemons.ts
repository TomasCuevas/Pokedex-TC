import { useInfiniteQuery } from "@tanstack/react-query";

//* service *//
import { getPokemonsService } from "../services";

export const useFetchPokemons = () => {
  const pokemonQuery = useInfiniteQuery(
    ["allPokemons"],
    ({ pageParam }) => getPokemonsService(pageParam),
    {
      getNextPageParam: (lastPage, nextPage) => {
        return nextPage.flat().length;
      },
      staleTime: 1000 * 60,
    }
  );

  return {
    pokemonQuery,
  };
};
