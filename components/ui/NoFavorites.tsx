import { Container, Text } from "@nextui-org/react";

export const NoFavorites: React.FC = () => {
  return (
    <Container className="flex h-[calc(100vh_-_140px)] flex-col items-center justify-center">
      <Text className="text-center" h1>
        No hay favoritos
      </Text>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        className="h-[250px] w-[250px] opacity-5"
        alt="no favorite"
      />
    </Container>
  );
};
