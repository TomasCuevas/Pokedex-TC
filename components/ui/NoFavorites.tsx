import { Container, Text, Image } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <Container className="flex flex-col h-[calc(100vh_-_140px)] items-center justify-center">
      <Text h1>No hay favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        className="w-[250px] h-[250px] opacity-5"
        alt="no favorite"
      />
    </Container>
  );
};
