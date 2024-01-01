import { SimpleGrid } from "@chakra-ui/react";
import useApi from "./hooks/useApi";
import ProductItemCards from "./ProductItemCards";

const ProductDisplayBoard = () => {
  const { error, storeProduct } = useApi();
  return (
    <SimpleGrid columns={{ base: 2, sm: 2, md: 3, lg: 4, xl: 5 }} gap={3}>
      {error && <p> {error} </p>}
      {storeProduct?.map((products) => (
        <ProductItemCards
          cardImage={products.image}
          cardTitle={products.title.slice(0, 25)}
          cardPrice={products.price}
          key={products.id}
        />
      ))}
    </SimpleGrid>
  );
};

export default ProductDisplayBoard;
