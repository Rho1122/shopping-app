import {
  Card,
  CardBody,
  CardHeader,
  Text,
  Image,
  HStack,
} from "@chakra-ui/react";

interface ProductItemCardsProps {
  cardImage: string;
  cardTitle: string;
  cardPrice: number;
}

const ProductItemCards = ({
  cardImage,
  cardPrice,
  cardTitle,
}: ProductItemCardsProps) => {
  return (
    <Card>
      <Image src={cardImage} height={250} borderRadius={4} />
      <CardBody>
        <CardHeader>{cardTitle}</CardHeader>
        <HStack paddingX={4}>
          <Text>${cardPrice}</Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ProductItemCards;
