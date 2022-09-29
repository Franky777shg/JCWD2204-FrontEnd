import React from "react";
import { Textarea, Center, Box, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export const List = () => {
  const { state } = useLocation();

  return (
    <Center p={7}>
      <Box
        border={3}
        borderColor="teal"
        borderStyle="solid"
        p={2}
        borderRadius={5}
      >
        <Heading>{state}</Heading>
      </Box>
    </Center>
  );
};
