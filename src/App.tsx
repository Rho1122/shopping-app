import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <BrowserRouter>
      <Grid templateAreas={{ base: `"header header"`, lg: `"header"` }}>
        <GridItem area={"header"} height={5} bgColor={"blue.300"}></GridItem>
      </Grid>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
