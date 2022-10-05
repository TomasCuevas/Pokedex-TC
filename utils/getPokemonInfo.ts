//* api *//
import { pokeApi } from "../axios";

//* interface *//
import { PokemonFull } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${nameOrId}`);

    const pokemon = {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
      stats: data.stats,
      types: data.types,
    };

    return pokemon;
  } catch (error) {
    return null;
  }
};
