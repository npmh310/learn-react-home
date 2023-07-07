import logo from "./logo.svg";
import "./App.css";
import React from "react";

class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Minh Hieu",
      age: "20",
    };
  }

  changeName = () => {
    this.setState({
      name: "Hieu 2",
      age: "20",
    });
  };

  render() {
    return (
      <div>
        <h4>{this.state.name}</h4>
        <h4>{this.state.age}</h4>
        <button type="button" onClick={this.changeName}>
          Change
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Member />
    </div>
  );
}

export default App;
