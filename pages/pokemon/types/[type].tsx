import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";

//* layout *//
import { Layout } from "../../../components/layouts";

//* utils *//
import { getPokemonForType } from "../../../utils";
import { PokemonCard } from "../../../components/pokemon";

interface Props {
  allPokemons: [{ id: string; name: string; img: string }];
  type: string;
}

const PokemonTypesPage: NextPage<Props> = ({ allPokemons, type }) => {
  return (
    <Layout title={`${type.toLocaleUpperCase()} - Pokedex TC`}>
      <section className="w-full px-[5%]">
        <div className="flex gap-2">
          <img
            src={`/img/types/${type}.png`}
            alt={type}
            height={80}
            width={80}
          />
          <h1 className="capitalize">{type}</h1>
        </div>
      </section>
      <Grid.Container gap={2} justify="flex-start">
        {allPokemons.map(({ id, name, img }) => (
          <PokemonCard key={id} id={id} name={name} img={img} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

//* static side generation *//
//* static side generation *//
export const getStaticPaths: GetStaticPaths = async () => {
  const types = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
  ];

  return {
    paths: types.map((type) => ({
      params: { type },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { type } = params as { type: string };
  const allPokemons = await getPokemonForType(type);

  return {
    props: {
      allPokemons,
      type,
    },
  };
};

export default PokemonTypesPage;
