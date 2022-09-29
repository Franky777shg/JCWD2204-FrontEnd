import { useState } from "react";
import {
  Center,
  Box,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Text,
} from "@chakra-ui/react";

export default function Filtering() {
  const data = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
    "Strawberry",
    "Persimmon",
  ];

  const [filtered, setFiltered] = useState([...data]);

  const ListItem = ({ data }) => {
    return (
      <Box
        // border={3}
        // borderColor="teal"
        // borderStyle="solid"
        bg="teal"
        maxWidth="100%"
        h="40px"
        textAlign="center"
        borderRadius={5}
        fontSize="1.4rem"
        mb={2}
        color="white"
      >
        <Text>{data}</Text>
      </Box>
    );
  };

  const showListItem = () => {
    return filtered.map((item) => <ListItem data={item} />);
  };

  const handleSearch = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      return setFiltered(data);
    }
    const filteredValues = data.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );

    setFiltered(filteredValues);
  };

  return (
    <Center p={10}>
      <Box
        border={3}
        borderColor="teal"
        borderStyle="solid"
        w={400}
        p={7}
        borderRadius={10}
      >
        <InputGroup size="md" mb={5}>
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Search something..."
            onChange={(e) => handleSearch(e)}
          />
        </InputGroup>
        {showListItem()}
      </Box>
    </Center>
  );
}
