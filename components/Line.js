import React from "react";
import { Grid, Box } from "@chakra-ui/react";

const Line = ({ name, address, date, times, updatedAt, fontSize, h }) => {
  return (
    <Grid templateColumns="repeat(6, 1fr)">
      <Box
        w="100%"
        h="8"
        bg="white"
        d="flex"
        justifyContent="center"
        alignItems="center"
        mt="3"
        fontSize={fontSize}
        h={h}
      >
        {name}
      </Box>
      <Box
        w="100%"
        h="8"
        bg="white"
        d="flex"
        justifyContent="center"
        alignItems="center"
        mt="3"
        fontSize={fontSize}
        h={h}
      >
        {address}
      </Box>
      <Box
        w="100%"
        h="8"
        bg="white"
        d="flex"
        justifyContent="center"
        alignItems="center"
        mt="3"
        fontSize={fontSize}
        h={h}
      >
        {date}
      </Box>
      <Box
        w="100%"
        h="8"
        bg="white"
        d="flex"
        justifyContent="center"
        alignItems="center"
        mt="3"
        fontSize={fontSize}
        h={h}
      >
        {times}
      </Box>
      <Box
        w="100%"
        h="8"
        bg="white"
        d="flex"
        justifyContent="center"
        alignItems="center"
        mt="3"
        fontSize={fontSize}
        h={h}
      ></Box>
      <Box
        w="100%"
        h="8"
        bg="white"
        d="flex"
        justifyContent="center"
        alignItems="center"
        mt="3"
        fontSize={fontSize}
        h={h}
      >
        {updatedAt}
      </Box>
    </Grid>
  );
};

export default Line;
