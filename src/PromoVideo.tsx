import { AspectRatio, Box, Flex, Heading } from "@chakra-ui/react";

export function PromoVideo() {
  return (
    <Flex
      py={4}
      width="100%"
      bgColor="#242021"
      alignItems="center"
      direction="column"
    >
      <Heading color="white" pb={8} textTransform="uppercase">
        See how Red River AMBUCS changes lives
      </Heading>
      <Box w="75%" maxW="900px">
        <AspectRatio ratio={1.5}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uLZKJ7COOnE?si=q4gyNsp4MUm_4p7S"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </AspectRatio>
      </Box>
    </Flex>
  );
}
