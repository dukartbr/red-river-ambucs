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
    text: "Request a Tryke Form",
    download:
      "https://ambucs.org/wp-content/uploads/2024/01/Amtryke-Order-Form-2024-1.pdf",
  },
  {
    text: "Veteran's Request Form",
    download:
      "https://ambucs.org/wp-content/uploads/2023/12/Full-VETERAN-Packet-editable.pdf",
  },
  {
    text: "Amtryke Catalog",
    download: "./pdfs/catalog.pdf",
  },
  {
    text: "Donations: Please email redriverambucs@gmail.com for address",
    download: "mailto:redriverambucs@gmail.com",
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
