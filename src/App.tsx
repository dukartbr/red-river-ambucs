import { Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { Hero } from "./Hero";

function App() {
  return (
    <Box w='100vw' h='100vh'>
      <Header />
      <Hero />
    </Box>
  );
}

export default App;
