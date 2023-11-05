import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";

export function Hero() {
  return (
    <Flex width='100%' bg='red.700' color='white'>
      <Box px={5} py={8} maxWidth='50%'>
        <Heading>
          All across the nation, AMBUCS chapters raise funds to donate Amtrykes
          to riders who are unable to operate traditional bikes
        </Heading>
        <Text my={8}>
          The mission of the Red River AMBUCS is Inspiring Mobility and
          Independence in the Red River Valley by working in partnership with
          Physical, Occupational and Speech Therapists by providing Amtryke
          Adaptive Trykes for people with disabilities and scholarships for
          theraists .
        </Text>
        <Button>Request An Amtryke Adaptive Tryke</Button>
      </Box>
      <Box width='100%'>
        <Image
          // width='100%'
          src='./images/bike.png'
          blendMode='soft-light'
          opacity={0.7}
        />
      </Box>
    </Flex>
  );
}
