import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Image,
	Link,
	Text,
} from "@chakra-ui/react";

export function Volunteer() {
	return (
		<Box width="100%" bgColor="white">
			<Container maxW="container.xl">
				<Flex direction={["column", null, null, "row"]}>
					<Box w={["80%", null, null, "65%"]}>
						<Image src="./images/volunteers.jpg" />
					</Box>
					<Box width={["100%", null, null, "35%"]} py={6} px={3}>
						<Heading textAlign="center">
							Interested in volunteer Opportunities?
						</Heading>
						<Text my={8}>
							Currently, there around 5,000 AMBUCS members spread throughout
							over 157 chapters in more than 36 states – and we’re growing
							AMBUCS began as an American Business Club dedicated to helping
							people with disabilities.
						</Text>
						<Box width="100%" textAlign="center">
							<Link href="./pdfs/VolApp.pdf" target="_blank">
								<Button
									textTransform="uppercase"
									bgColor="red.700"
									color="white"
									variant="solid"
									_hover={{
										backgroundColor: "red.700",
									}}
								>
									Volunteer Application
								</Button>
							</Link>
						</Box>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
}
