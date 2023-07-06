import logo from "./logo.svg";
import "./App.css";

//props
// function Member(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>Tuổi: {props.age}</p>
//     </div>
//   );
// }

// function MemberList() {
//   return (
//     <div>
//       <Member name="Nguyễn Văn A" age="25" />
//       <Member name="Trần Thị B" age="18" />
//     </div>
//   );
// }

//Component
// function Name() {
//   return (
//     <div className="info">
//       <h2>Nguyen Phuoc Minh hieu</h2>
//       <p>Tuổi: 25</p>
//     </div>
//   );
// }

// function Anh() {
//   return <img src="/assets/images/avatar2.png" alt="" />;
// }

//props nang cao
const member = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit proin sit amet neque.",
  info: {
    path: "/assets/images/avatar2.png",
    name: "Nguyễn Văn A",
    age: 25,
  },
};

// function Avatar(props){
//   return(
//     <div className="avatar">
//       <img src={props.info.path} alt="" />
//     </div>
//   )
// };

// function MemberInfo(props){
//   return(
//     <div className="info">
//       <h2>{props.info.name}</h2>
//       <p>Tuổi: {props.info.age}</p>
//     </div>
//   )
// };

// function Comment(props){
//   return(
//     <div className="comment">
//       {props.text}
//     </div>
//   )
// };

function Member(props) {
  return (
    <div>
      <h3>{props.info.name}</h3>
      <h3>_{props.info.age}</h3>
      <img src={props.info.path} alt="" />
      <h3>{props.text}</h3>
    </div>
  );
}

function MemberList() {
  return (
    <div className="member">
     <Member info={member.info} text={member.text} />
    
    </div>
  );
}

function App() {
  return (
    <div>
      <MemberList />
    </div>
  );
}

export default App;
