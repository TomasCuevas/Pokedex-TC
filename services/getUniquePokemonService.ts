//* api *//
import { pokeApi } from "../axios";

//* interface *//
import { IPokemonFull } from "../interfaces/pokemonFull";

export const getUniquePokemonService = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<IPokemonFull>(`/pokemon/${nameOrId}`);

    const pokemon = {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
      stats: data.stats,
      types: data.types,
    };

    return pokemon;
  } catch (error) {
    console.log(error);
    return null;
  }
};
