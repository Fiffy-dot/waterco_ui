import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.scss";


const Header = () => {
    const history = useHistory();

    return (
      <Navbar className="header" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#dashboard">WATER<span>CO</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Bill</Nav.Link>
          <Nav.Link href="#deets">Client</Nav.Link>
          <Nav.Link href="#deets">Payment</Nav.Link>
          <Nav.Link href="#deets">Premise</Nav.Link>
          <Nav.Link href="#deets">Routes</Nav.Link>
          <Nav.Link href="#deets">User</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )

}


export default Header;