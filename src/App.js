import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/MainComponents";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
