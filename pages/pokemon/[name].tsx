import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

//* icons *//
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

//* api *//
import { pokeApi } from "../../axios";

//* layout *//
import { Layout } from "../../components/layouts";

//* utils *//
import { getPokemonInfo } from "../../utils";

//* hooks *//
import { usePreviousNext, useToggleFavorite } from "../../hooks";

//* interfaces *//
import { PokemonFull, PokemonListResponse } from "../../interfaces";
import { ArrowsMobile } from "../../components/pokemon/ArrowsMobile";

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
      <Grid.Container className="mt-1 gap-5 flex justify-center px-[5%]">
        <ArrowsMobile
          next={next}
          previous={previous}
          nextClick={() => navigateTo("next")}
          previousClick={() => navigateTo("previous")}
        />
        <div className="h-[300px] w-[36px] items-center hidden lg:flex">
          <MdArrowBackIosNew
            onClick={() => navigateTo("previous")}
            className={
              previous
                ? "text-4xl text-slate-400 hover:text-white duration-300 cursor-pointer"
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
                className="w-full h-[200px]"
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
                {isInFavorite ? <>En favoritos</> : <>Guardar en favoritos</>}
              </Button>
            </Card.Header>
            <Card.Body className="w-full">
              <Container className="flex flex-col">
                {pokemon.sprites.front_default && (
                  <>
                    <Text className="text-3xl">Sprites:</Text>
                    <div className="flex flex-wrap justify-center">
                      <Image
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="w-[120px] h-[120px]"
                      />
                      <Image
                        src={pokemon.sprites.back_default}
                        alt={pokemon.name}
                        className="w-[120px] h-[120px]"
                      />
                      <Image
                        src={pokemon.sprites.front_shiny}
                        alt={pokemon.name}
                        className="w-[120px] h-[120px]"
                      />
                      <Image
                        src={pokemon.sprites.back_shiny}
                        alt={pokemon.name}
                        className="w-[120px] h-[120px]"
                      />
                    </div>
                  </>
                )}
              </Container>
            </Card.Body>
          </Card>
        </Grid>
        <div className="h-[300px] w-[36px] items-center hidden lg:flex">
          <MdArrowForwardIos
            onClick={() => navigateTo("next")}
            className={
              next
                ? "text-4xl text-slate-400 hover:text-white duration-300 cursor-pointer"
                : "hidden"
            }
          />
        </div>
      </Grid.Container>
    </Layout>
  );
};

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
