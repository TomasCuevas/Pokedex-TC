//* components *//
import { FavoritePokeCard } from "./";

//* interfaces *//
import { PokemonFavorite } from "../../interfaces";

interface Props {
  favoritePokemons: PokemonFavorite[];
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
