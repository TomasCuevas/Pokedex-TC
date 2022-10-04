import { useEffect, useState } from "react";
import { NextPage } from "next";

//* utils *//
import { localFavorites } from "../../utils";

//* layout *//
import { Layout } from "../../components/layouts";

//* components *//
import { NoFavorites } from "../../components/ui";
import { FavoriteList } from "../../components/pokemon";

//* interfaces *//
import { PokemonFavorite } from "../../interfaces";

const FavoritesPage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<PokemonFavorite[]>(
    []
  );

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokedex TC - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoriteList favoritePokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
