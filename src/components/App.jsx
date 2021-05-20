import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [exlamation, setExclamation] = useState("");

  function inputFName(event) {
    setFName(event.target.value);
  }

  function inputLName(event) {
    setLName(event.target.value);
  }

  function handleChange(event) {
    setExclamation("!");

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName} {exlamation}
      </h1>
      <form onSubmit={handleChange}>
        <input onInput={inputFName} name="fName" placeholder="First Name" />
        <input onInput={inputLName} name="lName" placeholder="Last Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
