import { NextPage } from "next";

//* layout *//
import { Layout } from "../components/layouts";

//* components *//
import { PokemonCard } from "../components/pokemon";
import { LoadMore } from "../components/ui";

//* hooks *//
import { useFetchPokemons } from "../hooks";

const HomePage: NextPage = () => {
  const { pokemonQuery } = useFetchPokemons();

  return (
    <Layout title="Listado de Pokemons | Pokedex TC">
      <section className="flex flex-wrap justify-center gap-4">
        {pokemonQuery.data?.pages.flat().map((pokemon, index) => (
          <PokemonCard
            key={(index + 1).toString()}
            id={(index + 1).toString()}
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              index + 1
            }.png`}
            name={pokemon.name}
          />
        ))}
      </section>
      <LoadMore
        onClick={pokemonQuery.fetchNextPage}
        none={
          pokemonQuery.data?.pages
            ? pokemonQuery.data.pages.flat().length >= 900
            : false
        }
      />
    </Layout>
  );
};

export default HomePage;
