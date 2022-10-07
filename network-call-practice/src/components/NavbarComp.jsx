import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const NavbarComp = () => {
  const data = useSelector((state) => state.userSlice.value);

  return (
    <Navbar bg="teal" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Network Call Practice</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Users
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>Total: {data.length}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
