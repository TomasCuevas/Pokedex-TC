import { useState } from "react";
import { NextPage, GetStaticProps } from "next";
import useSWRInmutable from "swr/immutable";

//* api *//
import { pokeApi } from "../axios";

//* layout *//
import { Layout } from "../components/layouts";

//* components *//
import { PokemonCard } from "../components/pokemon";
import { LoadMore } from "../components/ui";

//* interfaces *//
import { Pokemon, PokemonListResponse } from "../interfaces";

interface Props {
  pokemons: Pokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>(pokemons);
  const [offset, setOffset] = useState(pokemons.length);

  const { data } = useSWRInmutable<PokemonListResponse>(
    `https://pokeapi.co/api/v2/pokemon?limit=${50}&offset=${offset}`
  );

  const loadMorePokemons = () => {
    if (allPokemons.length === 900) return;
    const newPokemons: Pokemon[] = data!.results.map((pokemon, index) => ({
      name: pokemon.name,
      id: (index + 1 + allPokemons.length).toString(),
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        index + 1 + allPokemons.length
      }.png`,
    }));

    setAllPokemons((prev) => [...prev, ...newPokemons]);
    setOffset([...allPokemons, ...newPokemons].length);
  };

  return (
    <Layout title="Listado de Pokemons">
      <section className="flex flex-wrap justify-center gap-4">
        {allPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </section>
      <LoadMore onClick={loadMorePokemons} none={allPokemons.length >= 900} />
    </Layout>
  );
};

//* static side generation *//
//* static side generation *//
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=50");
  const pokemons = data.results.map((pokemon, index) => ({
    name: pokemon.name,
    id: (index + 1).toString(),
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      index + 1
    }.png`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
