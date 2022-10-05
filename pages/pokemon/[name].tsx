import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

//* icons *//
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdOutlineAddCircleOutline,
  MdOutlineRemoveCircleOutline,
} from "react-icons/md";

//* api *//
import { pokeApi } from "../../axios";

//* components *//
import { ArrowsMobile } from "../../components/pokemon";

//* layout *//
import { Layout } from "../../components/layouts";

//* utils *//
import { getPokemonInfo } from "../../utils";

//* hooks *//
import { usePreviousNext, useToggleFavorite } from "../../hooks";

//* interfaces *//
import { PokemonFull, PokemonListResponse } from "../../interfaces";
import { PokemonStats } from "../../components/pokemon/PokemonStats";

interface Props {
  pokemon: PokemonFull;
}

export const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
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
    <Layout title={`${pokemon.name.toUpperCase()} - Pokedex TC`}>
      <Grid.Container className="mt-1 flex justify-center gap-5 px-[5%]">
        <ArrowsMobile
          next={next}
          previous={previous}
          nextClick={() => navigateTo("next")}
          previousClick={() => navigateTo("previous")}
        />
        <div className="hidden h-[300px] w-[36px] items-center lg:flex">
          <MdArrowBackIosNew
            onClick={() => navigateTo("previous")}
            className={
              previous
                ? "cursor-pointer text-4xl text-slate-400 duration-300 hover:text-white"
                : "hidden"
            }
          />
        </div>
        <Grid className="w-full lg:w-[25%]">
          <Card isHoverable className="p-[30px]">
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.["official-artwork"].front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                className="h-[200px] w-full"
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid className="w-full lg:w-[calc(60%_-_20px)]">
          <Card className="px-5">
            <Card.Header className="flex flex-col items-center md:flex-row md:justify-between">
              <Text h1 className="capitalize">
                {pokemon.name}
              </Text>
              <Button color="gradient" onPress={onToggleFavorite}>
                {isInFavorite ? (
                  <div className="flex w-full items-center gap-1">
                    <MdOutlineRemoveCircleOutline className="text-lg" />
                    <p className="text-base font-medium tracking-[1px]">
                      Quitar de favoritos
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <MdOutlineAddCircleOutline className="text-lg" />
                    <p className="text-base font-medium tracking-[1px]">
                      Guardar en favoritos
                    </p>
                  </div>
                )}
              </Button>
            </Card.Header>
            <Card.Body className="w-full">
              <Container className="flex flex-col">
                <Text className="text-3xl font-semibold tracking-[1px]">
                  {pokemon.types.length > 1 ? <>Tipos:</> : <>Tipo:</>}
                </Text>
                <div className="my-6 flex flex-col flex-wrap sm:flex-row sm:gap-10">
                  {pokemon.types.map((type) => (
                    <div
                      key={type.type.name}
                      className="flex items-center gap-3"
                    >
                      <Image
                        src={`/img/types/${type.type.name}.png`}
                        alt={type.type.name}
                        className="m-0 h-[60px] w-[60px]"
                      />
                      <h4 className="capitalize">{type.type.name}</h4>
                    </div>
                  ))}
                </div>
                {pokemon.sprites.front_default && (
                  <>
                    <Text className="text-3xl font-semibold tracking-[1px]">
                      Más imágenes:
                    </Text>
                    <div className="flex flex-wrap justify-center">
                      <Image
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="h-[120px] w-[120px] duration-300"
                      />
                      <Image
                        src={pokemon.sprites.back_default}
                        alt={pokemon.name}
                        className="h-[120px] w-[120px]"
                      />
                      <Image
                        src={pokemon.sprites.front_shiny}
                        alt={pokemon.name}
                        className="h-[120px] w-[120px]"
                      />
                      <Image
                        src={pokemon.sprites.back_shiny}
                        alt={pokemon.name}
                        className="h-[120px] w-[120px]"
                      />
                    </div>
                  </>
                )}
              </Container>
            </Card.Body>
          </Card>
        </Grid>
        <div className="hidden h-[300px] w-[36px] items-center lg:flex">
          <MdArrowForwardIos
            onClick={() => navigateTo("next")}
            className={
              next
                ? "cursor-pointer text-4xl text-slate-400 duration-300 hover:text-white"
                : "hidden"
            }
          />
        </div>
      </Grid.Container>
      <PokemonStats stat={pokemon.stats} />
    </Layout>
  );
};

//* static side generation *//
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=50");
  const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemonNames.map((name) => ({
      params: { name },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const pokemon = await getPokemonInfo(name.toLowerCase());

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
    revalidate: 86400,
  };
};

export default PokemonByNamePage;
