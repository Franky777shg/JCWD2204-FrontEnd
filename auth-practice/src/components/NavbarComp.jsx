import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const NavbarComp = () => {
  const { username } = useSelector((state) => state.userSlice.value);

  return (
    <Flex
      as="header"
      // position="fixed"
      w="100%"
      bg="#179cf0"
      justifyContent="space-around"
      alignItems="center"
    >
      <FaTwitter style={{ width: "50px", height: "50px" }} />
      <Heading>Authentication</Heading>
      <Box bg="white" w="200px" display="flex" justifyContent="space-around">
        <Link to="/login">Login</Link>
        <Link to="register">Register</Link>
        <Text>{username}</Text>
      </Box>
    </Flex>
  );
};
