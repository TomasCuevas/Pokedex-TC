//* components *//
import { FavoritePokeCard } from "./";

//* interfaces *//
import { IPokemonFavorite } from "../../interfaces/pokemonList";

interface Props {
  favoritePokemons: IPokemonFavorite[];
}

export const FavoriteList: React.FC<Props> = ({ favoritePokemons }) => {
  return (
    <section className="flex flex-wrap justify-center gap-4">
      {favoritePokemons.map((pokemon) => (
        <FavoritePokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </section>
  );
};
