import { Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Volunteer } from "./Volunteer";
import { Scholarships } from "./Scholarships";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

function App() {
	return (
		<Box w="100vw" h="100vh">
			<Header />
			<Hero />
			<Volunteer />
			<Scholarships />
			<Contact />
			<Footer />
		</Box>
	);
}

export default App;
