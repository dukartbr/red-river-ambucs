import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Link,
  useBreakpoint,
} from "@chakra-ui/react";

export function Hero() {
  const breakpoint = useBreakpoint();
  const isDesktop = !["sm", "base"].includes(breakpoint);

  return (
    <Box width="100%" bg="red.700" color="white">
      <Container maxW="container.xl">
        <Flex>
          <Box pr={4} py={8} maxWidth={isDesktop ? "50%" : "initial"}>
            <Heading>
              All across the nation, AMBUCS chapters raise funds to donate
              Amtrykes to riders who are unable to operate traditional bikes
            </Heading>
            <Text my={8}>
              The mission of the Red River AMBUCS is Inspiring Mobility and
              Independence in the Red River Valley by working in partnership
              with Physical, Occupational and Speech Therapists by providing
              Amtryke Adaptive Trykes for people with disabilities and
              scholarships for therapists.
            </Text>
            <Box width="100%" textAlign="center">
              <Link
                href="https://cdn.shopify.com/s/files/1/0698/6160/5657/files/Therapist_Amtryke_Request_Forms_2025_1.pdf?v=1736961348"
                target="_blank"
              >
                <Button textTransform="uppercase">
                  Request An Amtryke Adaptive Tryke
                </Button>
              </Link>
            </Box>
          </Box>
          {isDesktop && (
            <Image
              width="100%"
              src="./images/bike.png"
              blendMode="soft-light"
              opacity={0.7}
            />
          )}
        </Flex>
      </Container>
    </Box>
  );
}
