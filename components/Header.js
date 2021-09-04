import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      height="15vh"
      bgColor="tomato"
      bgImage="url('/banner.svg')"
      bgPosition="fill"
      bgSize="cover"
      bgRepeat="no-repeat"
      d="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Heading as="h1">Locations of Intrest NZ</Heading>
    </Box>
  );
};

export default Header;
