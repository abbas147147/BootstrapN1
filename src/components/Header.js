import React from "react";

//bootstrap
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" bg="white" className="fixed-top py-2 navbarMain">
        <Container>
          <Navbar.Brand href="#home">Abbas Dehghan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">صفحه اصلی</Nav.Link>

              <NavDropdown
                title="محصولات"
                className="mx-2"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  لورم ایپسوم
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  لورم ایپسوم
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  لورم ایپسوم
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  لورم ایپسوم
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">تماس با ما</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
