import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";

//* layout *//
import { Layout } from "../../../components/layouts";

//* components *//
import { PokemonCard } from "../../../components/pokemon";

//* services *//
import { getPokemonsForTypeService } from "../../../services";

interface Props {
  allPokemons: [{ id: string; name: string; img: string }];
  type: string;
}

const PokemonTypesPage: NextPage<Props> = ({ allPokemons, type }) => {
  return (
    <Layout title={`${type.toLocaleUpperCase()} | Pokedex TC`}>
      <section className="mb-5 w-full px-[5%]">
        <div className="flex items-center gap-2">
          <Image
            src={`/img/types/${type}.png`}
            alt={type}
            height={80}
            width={80}
          />
          <h1 className="text-5xl font-bold capitalize tracking-tighter text-slate-100">
            {type}
          </h1>
        </div>
      </section>
      <section className="flex flex-wrap justify-center gap-4">
        {allPokemons.map(({ id, name, img }) => (
          <PokemonCard key={id} id={id} name={name} img={img} />
        ))}
      </section>
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
  const allPokemons = await getPokemonsForTypeService(type);

  return {
    props: {
      allPokemons,
      type,
    },
  };
};

export default PokemonTypesPage;
