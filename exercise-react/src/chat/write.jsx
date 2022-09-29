import { useState } from "react";
import { Box, Center, Button, Textarea, Heading } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Navigate } from "react-router-dom";

export const Write = () => {
  const [msg, setMsg] = useState("");
  const [move, setMove] = useState(false);

  const onSend = () => {
    setMsg(document.getElementById("input").value);
    setMove(true);
  };

  return move ? (
    <Navigate to="/list" state={msg} />
  ) : (
    <Center p={10}>
      <Box
        border={3}
        borderColor="teal"
        borderStyle="solid"
        p={5}
        borderRadius={10}
      >
        <Heading mb={5}>Update Your Status</Heading>
        <Textarea id="input" placeholder="How are you today?" mb={5} />
        <Button colorScheme="teal" onClick={onSend}>
          Send <ArrowRightIcon ml={2} />
        </Button>
      </Box>
    </Center>
  );
};
