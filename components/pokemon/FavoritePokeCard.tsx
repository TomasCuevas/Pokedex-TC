import { useContext } from "react";
import { useRouter } from "next/router";
import { Card, Grid, Text } from "@nextui-org/react";

//* icons *//
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

//* hooks *//
import { useToggleFavorite } from "../../hooks";

//* context *//
import { FavoritesContext } from "../../context";

//* interfaces *//
import { PokemonFavorite } from "../../interfaces";

interface Props {
  pokemon: PokemonFavorite;
}

export const FavoritePokeCard: React.FC<Props> = ({ pokemon }) => {
  const { onSetRerender } = useContext(FavoritesContext);
  const router = useRouter();

  const { onToggleFavorite } = useToggleFavorite(pokemon.name, pokemon.id);

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemon.name}`);
  };

  return (
    <Grid
      onClick={onFavoriteClicked}
      key={pokemon.id}
      xs={6}
      sm={3}
      md={2}
      xl={2}
    >
      <Card isHoverable isPressable className="bg-slate-900 p-[10px]">
        <MdOutlineRemoveCircleOutline
          className="ml-auto text-2xl duration-300 hover:text-red-700"
          onClick={(event) => {
            event.stopPropagation();
            onToggleFavorite();
            onSetRerender();
          }}
        />
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          className="h-36 w-full"
        />
        <Text className="mt-2 text-center text-xl capitalize">
          {pokemon.name}
        </Text>
      </Card>
    </Grid>
  );
};
