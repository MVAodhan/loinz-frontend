import React, { useState, useEffect } from "react";
import { Box, Spinner, Heading } from "@chakra-ui/react";
import axios from "axios";

import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

const Search = () => {
  let [locations, setLocations] = useState([]);
  let arrayOfLocationsArrays = [];
  useEffect(() => {
    const asyncFn = async () => {
      const res = awaitaxios.get(
        "https://loinzapi.netlify.app/.netlify/functions/locations"
      );
      setLocations(res.data);
    };

    asyncFn();
  }, []);

  if (locations.length > 0) {
    locations.forEach((location) => {
      const arrayedLocation = Object.values(location);
      arrayOfLocationsArrays = [...arrayOfLocationsArrays, arrayedLocation];
    });
  }

  return (
    <Box
      w="90vw"
      height="90%"
      d="flex"
      flexDir="column"
      mt="1rem"
      bgColor="white"
      overflow="scroll"
      borderTopLeftRadius="10px"
      borderTopRightRadius="10px"
    >
      {locations.length > 0 ? (
        <Grid
          data={arrayOfLocationsArrays}
          columns={["Name", "Address", "Date", "Times", "Action", "Updated At"]}
          search={true}
          style={{
            header: {
              display: "flex",
              justifyContent: "center",
            },
          }}
        />
      ) : (
        <Box
          w="100%"
          h="100%"
          d="flex"
          justifyContent="center"
          alignItems="center"
        >
          {" "}
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#FFCD00"
            size="xl"
          />{" "}
          <Heading as="h1" ml="10px">
            {" "}
            Loading locations from the Ministry of Health
          </Heading>
        </Box>
      )}
    </Box>
  );
};

export default Search;
