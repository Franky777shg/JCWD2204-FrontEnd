import { Button, Center, Flex, Heading, Box } from "@chakra-ui/react";
import { useState } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [interv, setInterv] = useState(null);

  const onStart = () => {
    setInterv(
      setInterval(() => {
        setTime((time) => time + 1);
      }, 1000)
    );
  };

  return (
    <Center p={10}>
      <Box
        w={400}
        h={250}
        border={5}
        borderColor="teal"
        borderStyle="solid"
        borderRadius={10}
      >
        <Heading fontSize="7rem" textAlign="center" mb={7}>
          {Math.floor(time / 60) < 10
            ? "0" + Math.floor(time / 60)
            : Math.floor(time / 60)}
          :{time % 60 < 10 ? "0" + (time % 60) : time % 60}
        </Heading>
        <Flex justifyContent="center" gap={10}>
          <Button colorScheme="teal" onClick={onStart}>
            Start
          </Button>
          <Button colorScheme="teal" onClick={() => clearInterval(interv)}>
            Stop
          </Button>
          <Button colorScheme="teal" onClick={() => setTime(0)}>
            Reset
          </Button>
        </Flex>
      </Box>
    </Center>
  );
}
