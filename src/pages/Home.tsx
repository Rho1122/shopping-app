import { Grid, GridItem, Show } from "@chakra-ui/react";
import ProductDisplayBoard from "../ProductDisplayBoard";

const Home = () => {
  return (
    <>
      <Grid
        templateAreas={`"nav main" "nav footer"`}
        gridTemplateColumns={"150px 1fr"}
        gap="1"
      >
        <Show above="lg">
          <GridItem pl="2" bg="pink.300" area={"nav"}>
            Nav
          </GridItem>
        </Show>
        <GridItem pl="2" area={"main"} padding={3}>
          <ProductDisplayBoard />
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
