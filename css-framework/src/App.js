import { useState } from "react";
import { Button, Heading, Center, Input, Flex, Stack } from "@chakra-ui/react";
import ToDo from "./components/toDo";

function App() {
  const [lists, setLists] = useState(["Coding", "Eat", "Repent", "Sleep"]);

  const renderToDo = () => {
    return lists.map((item) => {
      return <ToDo data={item} />;
    });
  };
  return (
    <Flex direction="column">
      <Heading textAlign="center" mb={5}>
        To Do List App
      </Heading>
      <Input placeholder="Basic usage" />
      <Button colorScheme="teal">Add</Button>
      <Center>
        <Stack>{renderToDo()}</Stack>
      </Center>
    </Flex>
  );
}

export default App;
