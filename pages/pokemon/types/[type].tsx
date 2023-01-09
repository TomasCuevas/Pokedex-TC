import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { motion, Variants } from "framer-motion";

//* layout *//
import { Layout } from "../../../components/layouts";

//* components *//
import { PokemonCard } from "../../../components/pokemon";

//* services *//
import { getPokemonsForTypeService } from "../../../services";

//* animation variants *//
const imageAnimation: Variants = {
  offscreen: { opacity: 0, x: -50 },
  onscreen: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.5 } },
};

const titleAnimation: Variants = {
  offscreen: { opacity: 0, x: 50 },
  onscreen: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.5 } },
};

//* interface *//
interface Props {
  allPokemons: [{ id: string; name: string; img: string }];
  type: string;
}

const PokemonTypesPage: NextPage<Props> = ({ allPokemons, type }) => {
  return (
    <Layout title={`${type.toLocaleUpperCase()} | Pokedex TC`}>
      <section className="mb-5 w-full px-[5%]">
        <div className="flex items-center gap-2">
          <motion.img
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={imageAnimation}
            src={`/img/types/${type}.png`}
            alt={type}
            className="h-[80px] w-[80px]"
          />
          <motion.h1
            initial="offscreen"
            whileInView="onscreen"
            variants={titleAnimation}
            viewport={{ once: true, amount: 0.1 }}
            className="text-5xl font-bold capitalize tracking-tighter text-slate-100"
          >
            {type}
          </motion.h1>
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
