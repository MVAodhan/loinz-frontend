import React from "react";
import { Box, Heading } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box
      as="footer"
      height="15vh"
      bgColor="white"
      d="flex"
      alignItems="center"
      justifyContent="center"
      h="15vh"
    >
      <Heading as="h1">Footer</Heading>
    </Box>
  );
};

export default Footer;
