import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    alert(`Name: ${name}`)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <br></br>
      </label>
      <button type='submit' className="btn btn-success">submit</button>
    </form>
  );
}

export default Login;
