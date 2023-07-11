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
  NavbarToggler,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert("Username: " + this.username.value + " Password: " + this.password.value
        + " Remember: " + this.remember.checked);
    event.preventDefault();

}

  render() {
    return (
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

        {/* // form login */}
        <div className="container mt-4">
     
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button outline onClick={this.toggleModal}>
                <span className="fa fa-sign-in fa-lg"></span> Login
              </Button>
            </NavItem>
          </Nav>
          <Modal isOpen={this.state.isModalOpen}  toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
              {/* form login trong the form*/}
              <Form onSubmit={this.handleLogin}>
                <FormGroup>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    innerRef={(input) => (this.username = input)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    innerRef={(input) => (this.password = input)}
                  />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="remember"
                      innerRef={(input) => (this.remember = input)}
                    />
                    Remember me
                  </Label>
                </FormGroup>
                <Button type="submit" value="submit" color="primary">
                  Login
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>
        
      </div>
    );
  }
}

export default Header;
