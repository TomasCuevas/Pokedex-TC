import { pokeApi } from "../axios";

//* interface *//
import { PokemonType } from "../interfaces";

export const getPokemonForType = async (type: string) => {
  const { data } = await pokeApi.get<PokemonType>(`/type/${type}`);
  const allPokemonsForType = data.pokemon.map((pokemon) => ({
    id: pokemon.pokemon.url.split("/").at(-2)!,
    name: pokemon.pokemon.name,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.pokemon.url
      .split("/")
      .at(-2)!}.png`,
  }));

  return allPokemonsForType;
};
