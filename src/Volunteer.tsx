import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Volunteer() {
  return (
    <Flex width='100%'>
      <Image src='./images/volunteers.jpg' w='65%' />
      <Box w='35%' py={6} px={3}>
        <Heading textAlign='center'>
          Interested in volunteer Opportunities?
        </Heading>
        <Text my={8}>
          Currently, there around 5,000 AMBUCS members spread throughout over
          157 chapters in more than 36 states – and we’re growing AMBUCS began
          as an American Business Club dedicated to helping people with
          disabilities.
        </Text>
        <Button>Volunteer</Button>
      </Box>
    </Flex>
  );
}
