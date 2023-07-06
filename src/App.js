import logo from "./logo.svg";
import "./App.css";

const infor = {
  name: "Minh Hieu",
  age: "20",
};

var Member = (props) => {
  return (
    <div className="member">
      <h1>{props.infor.name}</h1>
      <h2>{props.infor.age}</h2>
    </div>
  );
};

function App() {
  return (
    <div>
      <Member infor={infor} />
    </div>
  );
}

export default App;
