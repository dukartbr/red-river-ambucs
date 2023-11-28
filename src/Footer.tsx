import {
	Box,
	Container,
	Flex,
	Icon,
	Link,
	Spacer,
	Text,
} from "@chakra-ui/react";
import { FaRegEnvelope, FaFacebook, FaInstagram } from "react-icons/fa6";

const footerIcons = [
	{
		icon: FaFacebook,
		link: "https://www.facebook.com/RedRiverAMBUCS",
	},
	{
		icon: FaInstagram,
		link: "https://www.instagram.com/redriverambucs",
	},
	{
		icon: FaRegEnvelope,
		link: "mailto:redriverambucs@gmail.com",
	},
];

export function Footer() {
	return (
		<Box bgColor="red.700" color="white" py={3}>
			<Container maxW="container.xl">
				<Flex>
					<Text>Red River Ambucs &copy; 2023</Text>
					<Spacer />
					<Flex>
						{footerIcons.map(({ icon, link }) => (
							<Link href={link} key={link} mx={2} fontSize="3xl" isExternal>
								<Icon as={icon} />
							</Link>
						))}
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
}
