import logo from "./logo.svg";
import "./App.css";
import React from "react";

class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        { name: "Minh Hieu", age: "20" },
        { name: "Duong Minh", age: "30" },
        { name: "Lam Nghia", age: "32" },
      ],
      job: "Coder",
    };
  }
  changeName = () => {
    this.setState ({
      user: [
        { name: "Minh Ngoc", age: "22" },
        { name: "Thi Nhu", age: "31" },
        { name: "Huu Lam", age: "22" },
      ],
      job: "Tester",
    });
  };

  render() {
    return (
      <div>
        <h4>{this.state.user[0].name}</h4>
        <h4>{this.state.user[0].age}</h4>
        <h3>{this.state.job}</h3>
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
