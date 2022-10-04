import { useRouter } from "next/router";
import { Card, Grid } from "@nextui-org/react";

//* interfaces *//
import { PokemonFavorite } from "../../interfaces";

interface Props {
  pokemon: PokemonFavorite;
}

export const FavoritePokeCard: React.FC<Props> = ({ pokemon }) => {
  const router = useRouter();

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
      <Card isHoverable isPressable className="p-[10px]">
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          className="w-full h-36"
        />
      </Card>
    </Grid>
  );
};
