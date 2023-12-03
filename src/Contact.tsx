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
import { FaPhoneFlip, FaRegEnvelope, FaRegNewspaper } from "react-icons/fa6";

const resources = [
	{
		text: "Membership Application",
		download: "./pdfs/VolApp.pdf",
	},
	{
		text: "Request a Tryke",
		download: "./pdfs/requestform.pdf",
	},
	{
		text: "Amtryke Catalog",
		download: "./pdfs/catalog.pdf"
	},
	{
		text: "Donations can be mailed to Interact Therapy c/o Red River AMBUCS 3175 Sienna Dr S. Suite 103 Fargo ND 58104",
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
	{
		text: "Fax - 701-532-1896 ",
		icon: FaRegNewspaper,
	},
];

export function Contact() {
	return (
		<Box width="100%" color="white" py={12} bgColor="#242021">
			<Container maxW="container.xl">
				<Flex width="100%" direction={["column", null, null, "row"]}>
					<Box width={["100%", null, null, "50%"]} my={5} px={8}>
						<Text textAlign="left" fontSize="xl" fontWeight="bold">
							Resources
						</Text>
						<UnorderedList>
							{resources.map(({ text, download }) => (
								<ListItem key={text} my={3}>
									{download ? (
										<Link href={download} target="_blank">
											<Text>{text}</Text>
										</Link>
									) : (
										<Text>{text}</Text>
									)}
								</ListItem>
							))}
						</UnorderedList>
					</Box>
					<Box width={["100%", null, null, "50%"]} my={5} px={8}>
						<Text fontSize="xl" fontWeight="bold">
							Contact
						</Text>
						<UnorderedList>
							{contacts.map(({ text, icon, link }) => (
								<ListItem my={3} key={text} listStyleType="none">
									<Flex>
										<ListIcon as={icon} mt={1} />
										{link ? (
											<Link href={link}>
												<Text>{text}</Text>
											</Link>
										) : (
											<Text>{text}</Text>
										)}
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
