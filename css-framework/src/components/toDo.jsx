import { Box, Text, Button } from "@chakra-ui/react";

export default function ToDo({ data, onDelete, indexToDelete }) {
  return (
    <Box
      bgColor="salmon"
      w="30vw"
      h="50px"
      borderRadius={10}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Text fontSize="2rem">{data}</Text>
      <Button onClick={() => onDelete(indexToDelete)} colorScheme="teal">
        ❌
      </Button>
    </Box>
  );
}
