import { pokeApi } from "../axios";

//* interface *//
import { IPokemonType } from "../interfaces/pokemonList";

export const getPokemonsForTypeService = async (type: string) => {
  try {
    const { data } = await pokeApi.get<IPokemonType>(`/type/${type}`);
    const allPokemonsForType = data.pokemon.map((pokemon) => ({
      id: pokemon.pokemon.url.split("/").at(-2)!,
      name: pokemon.pokemon.name,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.pokemon.url
        .split("/")
        .at(-2)!}.png`,
    }));

    return allPokemonsForType;
  } catch (error) {
    console.log(error);
    return null;
  }
};
