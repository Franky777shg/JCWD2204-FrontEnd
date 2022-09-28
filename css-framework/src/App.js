import { useState } from "react";
import { Button, Heading, Center, Input, Flex, Stack } from "@chakra-ui/react";
import ToDo from "./components/toDo";

function App() {
  const [lists, setLists] = useState(["Coding", "Eat", "Drink"]);

  const renderToDo = () => {
    return lists.map((item, index) => {
      return (
        <ToDo
          data={item}
          onDelete={onDelete}
          indexData={index}
          onEdit={onEdit}
        />
      );
    });
  };

  const onAdd = () => {
    let newData = document.getElementById("newToDo").value;
    setLists([...lists, newData]);
  };

  const onDelete = (index) => {
    let temp = [...lists];
    temp.splice(index, 1);
    setLists(temp);
  };

  const onEdit = (index) => {
    // console.log(index);
    let inputFromUser = prompt("Mau ganti apa?");
    console.log(inputFromUser);
    let temp = [...lists];
    temp.splice(index, 1, inputFromUser);
    setLists(temp);
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
