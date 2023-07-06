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
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>
      </div>
    );
  }
}

function App() {
  return <div>
    <Member/>
  </div>;
}

export default App;
