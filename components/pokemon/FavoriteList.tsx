import { Grid } from "@nextui-org/react";

//* components *//
import { FavoritePokeCard } from "./";

//* interfaces *//
import { PokemonFavorite } from "../../interfaces";

interface Props {
  favoritePokemons: PokemonFavorite[];
}

export const FavoriteList: React.FC<Props> = ({ favoritePokemons }) => {
  return (
    <Grid.Container gap={2} className="flex-row justify-start">
      {favoritePokemons.map((pokemon) => (
        <FavoritePokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid.Container>
  );
};
