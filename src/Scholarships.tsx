import { Box, Button, Container, Heading, Link, Text } from "@chakra-ui/react";

export function Scholarships() {
	return (
		<Box bgColor="red.700" color="white" width="100%">
			<Container maxW="container.xl">
				<Box py={8} textAlign="center">
					<Heading my={8} fontWeight="bold" textTransform="uppercase">
						Scholarships
					</Heading>
					<Text>
						Since 1955, National AMBUCS, Inc. has awarded scholarships to
						students pursuing degrees in physical therapy, occupational therapy,
						speech language pathology and hearing audiology . To date, more than
						$9.8 million in scholarships have been awarded to over 16,500
						students.
					</Text>
					<Link
						href="https://ambucs.org/therapists/scholarship-program/"
						target="_blank"
					>
						<Button my={8} textTransform="uppercase">
							Scholarship Info
						</Button>
					</Link>
				</Box>
			</Container>
		</Box>
	);
}
