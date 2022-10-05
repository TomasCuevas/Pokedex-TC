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
      <Card isHoverable isPressable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image height={150} width="100%" src={img} alt={name} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
