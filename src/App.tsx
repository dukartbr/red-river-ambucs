import { Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { VideoContainer as Video } from "./Video";
import { PromoVideo } from "./PromoVideo";
import { Volunteer } from "./Volunteer";
import { Scholarships } from "./Scholarships";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

function App() {
  return (
    <Box w="100vw" h="100vh">
      <Header />
      <Hero />
      <PromoVideo />
      <Volunteer />
      <Video />
      <Scholarships />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
