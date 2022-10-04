//* interface *//
import { PokemonFavorite } from "../interfaces/pokemon-list";

const toggleFavorite = (name: string, id: number) => {
  let favorites: PokemonFavorite[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  const existInFavorites = favorites.find((favorite) => favorite.id === id);
  if (existInFavorites) {
    favorites = favorites.filter((favorite) => favorite.id !== id);
  } else {
    favorites.push({ name, id });
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (name: string): boolean => {
  if (typeof window === "undefined") return false;

  const favorites: PokemonFavorite[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  const existInFavorites = favorites.find((favorite) => favorite.name === name);
  return existInFavorites ? true : false;
};

const pokemons = (): PokemonFavorite[] =>
  JSON.parse(localStorage.getItem("favorites") || "[]");

export default {
  toggleFavorite,
  existInFavorites,
  pokemons,
};
