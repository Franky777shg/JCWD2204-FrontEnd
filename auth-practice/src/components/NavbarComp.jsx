import React from "react";
import { Box, Flex, Heading, Text, Button, Select } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

export const NavbarComp = () => {
  const { username } = useSelector((state) => state.userSlice.value);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

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
      <Box bg="white" w="250px" display="flex" justifyContent="space-around">
        <Link to="/login">Login</Link>
        <Link to="register">Register</Link>
        <Link to="profile">Profile</Link>
        <Text>{username}</Text>
      </Box>
      <Button as={Link} to="/login" onClick={onLogout}>
        Logout
      </Button>
      {/* <Select w="10%">
        <option value="option1">Login</option>
        <option value="option2">Register</option>
        <option value="option3">Logout</option>
      </Select> */}
    </Flex>
  );
};
