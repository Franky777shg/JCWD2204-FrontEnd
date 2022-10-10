import {
  Container,
  Nav,
  Navbar,
  Badge,
  Popover,
  OverlayTrigger,
  Button,
  Table,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";

export const NavbarComp = () => {
  // const data = useSelector((state) => state.userSlice.value);
  const cart = useSelector((state) => state.cartSlice.value);
  console.log(cart);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Cart</span>
          <Link to="/cart">Lihat Sekarang</Link>
        </div>
      </Popover.Header>
      <Popover.Body>
        <Table striped bordered hover>
          <tbody>
            {cart.map((item, index) => {
              return (
                <tr>
                  <td>
                    <Image
                      style={{ width: "50px", height: "50px" }}
                      src={item.image}
                    />
                  </td>
                  <td>
                    {item.name} ({item.qty})
                  </td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Popover.Body>
    </Popover>
  );

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
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <Button variant="outline-primary" size="sm">
                <IoCartOutline />
                <Badge>{cart.length}</Badge>
              </Button>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
        {/* <Navbar.Brand>Total: {data.length}</Navbar.Brand> */}
      </Container>
    </Navbar>
  );
};
