import { useState } from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/future/image";

//* icons *//
import {
  MdOutlineAddCircleOutline,
  MdOutlineRemoveCircleOutline,
} from "react-icons/md";

//* components *//
import { Arrows, PokemonStats } from "../../components/pokemon";

//* layout *//
import { Layout } from "../../components/layouts";

//* services *//
import { getUniquePokemonService } from "../../services";

//* hooks *//
import { usePreviousNext, useToggleFavorite } from "../../hooks";

//* interfaces *//
import { IPokemonFull } from "../../interfaces/pokemonFull";

interface Props {
  pokemon: IPokemonFull;
}

export const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  const { isInFavorite, onToggleFavorite } = useToggleFavorite(
    pokemon.name,
    pokemon.id
  );
  const { previous, next } = usePreviousNext(pokemon.name);

  const navigateTo = (to: string) => {
    if (to === "next" && next) return router.push(`/pokemon/${next}`);
    if (to === "previous" && previous)
      return router.push(`/pokemon/${previous}`);
  };

  return (
    <Layout title={`${pokemon.name.toUpperCase()} | Pokedex TC`}>
      <article className="mx-auto mt-1 flex max-w-[1400px] flex-col flex-wrap gap-5 px-[5%] lg:flex-row">
        <section className="w-full">
          <Arrows
            next={next}
            previous={previous}
            nextClick={() => navigateTo("next")}
            previousClick={() => navigateTo("previous")}
          />
        </section>
        <section
          className={`w-full lg:w-[30%] ${
            isLoaded ? "scale-100" : "scale-75"
          } transition-all duration-300`}
        >
          <div
            className={`w-full rounded-2xl bg-slate-900 p-5 transition-all duration-300 hover:-translate-y-1 ${
              isLoaded ? "" : "blur-sm"
            }`}
          >
            <Image
              src={
                pokemon.sprites.other?.["official-artwork"].front_default ||
                "/no-image.png"
              }
              alt={pokemon.name}
              width={0}
              height={0}
              sizes="100%"
              className="h-[200px] w-full object-contain lg:h-[250px]"
              onLoadingComplete={() => setIsLoaded(true)}
            />
          </div>
        </section>
        <section className="flex w-full flex-col gap-7 rounded-2xl bg-slate-900 p-5 lg:w-[calc(70%_-_20px)]">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <h1 className="text-5xl font-bold capitalize tracking-tighter text-slate-200">
              {pokemon.name}
            </h1>
            <button
              className={`${
                isInFavorite ? "defavorite-gradient" : "favorite-gradient"
              } rounded-lg px-3 py-2 transition-all duration-300 hover:rotate-1 hover:scale-[102%]`}
              onClick={onToggleFavorite}
            >
              {isInFavorite ? (
                <div className="flex w-full items-center gap-1 text-slate-100">
                  <MdOutlineRemoveCircleOutline className="text-lg" />
                  <p className="text-base font-medium tracking-[1px]">
                    Quitar de favoritos
                  </p>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-slate-100">
                  <MdOutlineAddCircleOutline className="text-lg " />
                  <p className="text-base font-medium tracking-[1px]">
                    Guardar en favoritos
                  </p>
                </div>
              )}
            </button>
          </div>
          <div>
            <span className="text-3xl font-semibold tracking-tighter text-slate-100">
              Tipo:
            </span>
            <div className="my-6 flex flex-col flex-wrap sm:flex-row sm:gap-10">
              {pokemon.types.map((type) => (
                <div key={type.type.name} className="flex items-center gap-3">
                  <Image
                    src={`/img/types/${type.type.name}.png`}
                    alt={type.type.name}
                    className="m-0 h-[60px] w-[60px]"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                  <h4 className="text-xl font-bold capitalize tracking-tighter text-slate-200">
                    {type.type.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
          <div>
            {pokemon.sprites.front_default ? (
              <>
                <span className="text-3xl font-semibold tracking-tighter text-slate-100">
                  Más imágenes:
                </span>
                <div className="my-2 flex flex-wrap justify-center">
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="h-[120px] w-[120px] object-contain duration-300"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                  <Image
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                    className="h-[120px] w-[120px] object-contain duration-300"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                  <Image
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    className="h-[120px] w-[120px] object-contain duration-300"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                  <Image
                    src={pokemon.sprites.back_shiny}
                    alt={pokemon.name}
                    className="h-[120px] w-[120px] object-contain duration-300"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                </div>
              </>
            ) : null}
          </div>
        </section>
        <PokemonStats stat={pokemon.stats} />
      </article>
    </Layout>
  );
};

//* static side generation *//
//* static side generation *//
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const pokemon = await getUniquePokemonService(name.toLowerCase());

  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonByNamePage;
