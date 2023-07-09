import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/MenuComponents";
import { Navbar, NavbarBrand } from "reactstrap";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu/>
      </div>
    );
  }
}

export default App;
