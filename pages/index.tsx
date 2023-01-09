import { NextPage } from "next";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

//* layout *//
import { Layout } from "../components/layouts";

//* components *//
import { PokemonCard } from "../components/pokemon";
import { Loader } from "../components/ui";

//* hooks *//
import { useFetchPokemons } from "../hooks";

const HomePage: NextPage = () => {
  const { pokemonQuery } = useFetchPokemons();

  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (
      inView &&
      !pokemonQuery.isLoading &&
      pokemonQuery.data!.pages.flat().length <= 900
    ) {
      pokemonQuery.fetchNextPage();
    }
  }, [inView]);

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
      <div ref={ref} className="h-10 w-full"></div>
      {pokemonQuery.isLoading ? <Loader /> : null}
    </Layout>
  );
};

export default HomePage;
