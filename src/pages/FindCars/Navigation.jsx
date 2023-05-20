import React from 'react'
import { Button, Container, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from "../../assets/svg/logo.svg";

const Navigation = () => {
  return (
    <>
      <Navbar key={"md"} bg="light" expand={"md"}>
        <Container fluid>
          <Navbar.Brand className="navbar-brand" href="#">
            <Image src={Logo} alt="Logo" title="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Offcanvas
            id="responsive-navbar-nav"
            aria-labelledby="responsiveLabel-navbar-nav"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="responsiveLabel-navbar-nav">
                BCR
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 align-items-center">
                <Nav.Link className="nav-link active" aria-current="page" href="#service">Our Service</Nav.Link>
                <Nav.Link className="nav-link active" href="#why">Why US</Nav.Link>
                <Nav.Link className="nav-link active" href="#testimonial">Testimonial</Nav.Link>
                <Nav.Link className="nav-link active" href="#faq">FAQ</Nav.Link>
                <Nav.Link className="nav-link active" href="#faq"><Button variant="outline-success">Register</Button></Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation