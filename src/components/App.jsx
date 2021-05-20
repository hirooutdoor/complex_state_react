import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [exlamation, setExclamation] = useState("");

  function inputFName(event) {
    const firstName = event.target.value;
    setFName(firstName);
  }

  function inputLName(event) {
    const lastName = event.target.value;
    setLName(lastName);
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
        <input
          onChange={inputFName}
          name="fName"
          placeholder="First Name"
          value={fName}
        />
        <input
          onChange={inputLName}
          name="lName"
          placeholder="Last Name"
          value={lName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
