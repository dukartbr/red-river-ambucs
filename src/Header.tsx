import { Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";

export function Header() {
	return (
		<Flex px={16} py={5} width="100%" bgColor="white">
			<Image src="./images/logo.jpg" h="3rem" />
			<Spacer />
			<Link
				as={Button}
				href="https://www.paypal.com"
				bg="red.700"
				color="white"
				textTransform="uppercase"
				_hover={{
					backgroundColor: "red.700",
				}}
			>
				Donate
			</Link>
		</Flex>
	);
}
