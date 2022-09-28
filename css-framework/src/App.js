import { useState } from "react";
import { Button, Heading, Center, Input, Flex, Stack } from "@chakra-ui/react";
import ToDo from "./components/toDo";

function App() {
  const [lists, setLists] = useState([]);

  const renderToDo = () => {
    return lists.map((item) => {
      return <ToDo data={item} />;
    });
  };

  const onAdd = () => {
    let newData = document.getElementById("newToDo").value;
    // console.log(newData);
    // let temp = [...lists];
    // temp.push(newData);
    // setLists(temp);
    setLists([...lists, newData]);
  };

  return (
    <Flex direction="column">
      <Heading textAlign="center" mb={5}>
        To Do List App
      </Heading>
      <Input placeholder="Add New To Do List" id="newToDo" />
      <Button onClick={onAdd} colorScheme="teal">
        Add
      </Button>
      <Center>
        <Stack>{renderToDo()}</Stack>
      </Center>
    </Flex>
  );
}

export default App;
