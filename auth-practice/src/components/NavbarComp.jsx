import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
export const NavbarComp = () => {
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
      <Box>
        <Link to="/login" style={{ marginRight: "10px" }}>
          Login
        </Link>
        <Link to="register">Register</Link>
      </Box>
    </Flex>
  );
};
