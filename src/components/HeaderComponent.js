import React from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  Input,
  Collapse,
  NavItem,
  InputGroup,
  Button,
  NavbarToggler
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return(
          <div>
              <div>
        <Navbar className="header" light expand="md">
          <NavbarBrand className="col-md-3" href="/">
            <img
              src="/assets/images/toppng.com-instagram-logo-transparent-png-512x512.png"
              alt="Logo"
              className="logo"
            />
          </NavbarBrand>
          <Nav className="col-md-6 mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/menu">
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/aboutUs">
                About us
              </NavLink>
            </NavItem>
          </Nav>
          <InputGroup className="col-md-3 search-bar">
            <Input placeholder="Search..." />
            <Button color="secondary">Search</Button>
          </InputGroup>
        </Navbar>
      </div>
             
          </div>
      );
  }
}


export default Header;
