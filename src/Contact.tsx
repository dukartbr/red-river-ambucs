import {
	Box,
	Container,
	Flex,
	Text,
	Link,
	ListItem,
	ListIcon,
	UnorderedList,
} from "@chakra-ui/react";
import { FaPhoneFlip, FaRegEnvelope } from "react-icons/fa6";

const resources = [
	{
		text: "Volunteer Application",
		download: "./pdfs/VolApp.pdf",
	},
	// I believe this the same doc as request form?
	// {
	// 	text: "Tryke Waiver Form",
	// 	download: "./pdfs/Parent-Amtryke-Request-Waiver-2019.pdf",
	// },
	{
		text: "Request a Tryke",
		download: "./pdfs/requestform.pdf",
	},
];

const contacts = [
	{
		text: "701-261-6804",
		icon: FaPhoneFlip,
		link: "tel:17012616804",
	},
	{
		text: "redriverambucs@gmail.com",
		icon: FaRegEnvelope,
		link: "mailto:redriverambucs@gmail.com",
	},
];

export function Contact() {
	return (
		<Box
			width="100%"
			color="white"
			py={12}
			bgColor="#242021"
			textTransform="uppercase"
		>
			<Container maxW="container.xl">
				<Flex width="100%">
					<Box width="50%">
						<Text textAlign="left" fontSize="xl" fontWeight="bold">
							Resources
						</Text>
						<UnorderedList>
							{resources.map(({ text, download }) => (
								<ListItem key={text} my={3}>
									<Link href={download} target="_blank">
										<Text>{text}</Text>
									</Link>
								</ListItem>
							))}
						</UnorderedList>
					</Box>
					<Box width="50%">
						<Text fontSize="xl" textAlign="center" fontWeight="bold">
							Contact
						</Text>
						<UnorderedList>
							{contacts.map(({ text, icon, link }) => (
								<ListItem my={3} key={text} listStyleType="none">
									<Flex>
										<ListIcon as={icon} mt={1} ml={8} />
										<Link href={link}>
											<Text>{text}</Text>
										</Link>
									</Flex>
								</ListItem>
							))}
						</UnorderedList>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
}
