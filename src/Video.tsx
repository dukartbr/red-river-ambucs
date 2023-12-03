import { AspectRatio, Box, Flex, Heading } from "@chakra-ui/react";

export function VideoContainer() {
    return (
        <Flex textAlign="center" width="100%" bgColor="#242021" py={5} px={8} alignItems="center" direction="column">
            <Heading color="white" pb={8}>See how Red River AMBUCS changes lives</Heading>
            <Box w="75%" maxW="900px">
                <AspectRatio ratio={1.5}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/DGP49qAqLDU?si=vM-WuB7UV-9pafn7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </AspectRatio>
            </Box>
        </Flex>
    )
} 