import { Box, Text, Heading } from "@chakra-ui/react";

export function Scholarships() {
  return (
    <Box
      w='100%'
      bgImage='./images/scholarships.jpg'
      py={8}
      textAlign='center'
      bgColor='red'
    >
      <Heading>Scholarships</Heading>
      <Text>
        Since 1955, National AMBUCS, Inc. has awarded scholarships to students
        pursuing degrees in physical therapy, occupational therapy, speech
        language pathology and hearing audiology . To date, more than $9.8
        million in scholarships have been awarded to over 16,500 students.
      </Text>
    </Box>
  );
}
