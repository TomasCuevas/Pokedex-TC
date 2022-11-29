//* axios *//
import { pokeApi } from "../axios";

//* interface *//
import { IPokemonListResponse } from "../interfaces/pokemonList";

export const getPokemonsService = async (offset = 0) => {
  try {
    const params = new URLSearchParams();
    params.append("limit", "50");
    params.append("offset", offset.toString());

    const { data } = await pokeApi.get<IPokemonListResponse>("/pokemon", {
      params,
    });

    return data.results;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los pokemons.");
  }
};
