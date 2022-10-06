import { useState } from "react";
import { Button, Heading, Center, Input, Flex, Stack } from "@chakra-ui/react";
import ToDo from "./components/toDo";

// setup redux
import { useSelector, useDispatch } from "react-redux";
import { addNew, remove, edit } from "./redux/toDoSlice";

function App() {
  // const [lists, setLists] = useState(["Coding", "Eat", "Drink"]);
  const { value, count } = useSelector((state) => state.toDoSlice);
  const dispatch = useDispatch();

  const renderToDo = () => {
    return value.map((item, index) => {
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
    dispatch(addNew(newData));
  };

  const onDelete = (index) => {
    dispatch(remove(index));
  };

  const onEdit = (index) => {
    let inputFromUser = prompt("Mau ganti apa?");

    if (inputFromUser) {
      dispatch(
        edit({
          inputFromUser,
          index,
        })
      );
    } else {
      alert("Isi yang bener dong!");
    }
  };

  return (
    <Flex direction="column">
      <Heading textAlign="center" mb={5}>
        To Do List App
      </Heading>
      <Heading>Total: {count}</Heading>
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
