import logo from "./logo.svg";
import "./App.css";
import React from "react";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      value: "",
      submit: "",
    };
  }

  handleValue = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  handleSubmit = () => {
    this.setState({
      submit: this.state.value,
    });
  };

  render(){
    return(
      <div>
        <input type="text" value={this.state.value}  onChange={this.handleValue}/>
        <button type="button" onClick={this.handleSubmit} > Change </button>
        <h3>{this.state.submit}</h3>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <InputForm />
    </div>
  );
}

export default App;
