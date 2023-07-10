import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input, InputGroup, Button
} from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <div>
            <Navbar className="header" light expand="md">
      <NavbarBrand className="col-md-3" href="/">
        <img src="/assets/images/toppng.com-instagram-logo-transparent-png-512x512.png" alt="Logo" className="logo" />
      </NavbarBrand>
      <Nav className="col-md-4 mr-auto" navbar>
        <NavItem>
          <NavLink href="/link1">Link 1</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/link2">Link 2</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/link3">Link 3</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/link4">Link 4</NavLink>
        </NavItem>
      </Nav>
      <InputGroup className="col-md-4 search-bar">
        <Input placeholder="Search..." />
        <Button color="secondary">Search</Button>
      </InputGroup>
    </Navbar>
      </div>
    );
  }
}

export default Header;
