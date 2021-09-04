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
        height={h}
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
        height={h}
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
        height={h}
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
        height={h}
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
        height={h}
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
        height={h}
      >
        {updatedAt}
      </Box>
    </Grid>
  );
};

export default Line;
