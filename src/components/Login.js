import React, { useRef, useState } from "react";

//uncontrolled
function Login() {
  const formRef = useRef(null);
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const formDate = new FormData(formRef.current);
    console.log(`Name: ${formDate.get("name")}`);
    alert(`Name: ${formDate.get("name")}`);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          placeholder="Please input your name"
          name="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <br></br>
      </label>
      <button type="submit" className="btn btn-success">
        submit
      </button>
    </form>
  );
}

//have controlled
// function Login() {
//   const [name, setName] = useState("");
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Name: ${name}`);
//     alert(`Name: ${name}`)
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={name}
//           onChange={(event) => {
//             setName(event.target.value);
//           }}
//         ></input>
//         <br></br>
//       </label>
//       <button type='submit' className="btn btn-success">submit</button>
//     </form>
//   );
// }

export default Login;
