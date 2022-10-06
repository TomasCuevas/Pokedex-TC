import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

//* interfaces *//
import { Pokemon } from "../../interfaces";

export const PokemonCard: React.FC<Pokemon> = ({ id, img, name }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${name}`);
  };

  return (
    <Grid onClick={onClick} xs={6} sm={3} md={2} xl={2} key={id}>
      <Card className="bg-slate-900" isHoverable isPressable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image height={150} width="100%" src={img} alt={name} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text className="text-xl capitalize">{name}</Text>
            <Text className="text-xl">#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
