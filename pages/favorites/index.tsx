import { useEffect, useState, useContext } from "react";
import { NextPage } from "next";

//* utils *//
import { localFavorites } from "../../utils";

//* layout *//
import { Layout } from "../../components/layouts";

//* components *//
import { NoFavorites } from "../../components/ui";
import { FavoriteList } from "../../components/pokemon";

//* context *//
import { FavoritesContext } from "../../context";

//* interfaces *//
import { PokemonFavorite } from "../../interfaces";

const FavoritesPage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<PokemonFavorite[]>(
    []
  );
  const { rerender } = useContext(FavoritesContext);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, [rerender]);

  return (
    <Layout title="Favoritos | Pokedex TC">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoriteList favoritePokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
