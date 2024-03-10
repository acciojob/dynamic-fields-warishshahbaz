import React, { useState } from "react";
import "./../styles/App.css";
import PersonForm from "./PersonalForm";

const App = () => {
  const [inputField, setInputField] = useState([{ name: "", age: "" }]);
  // let count = 1;
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");

  const handleAddMore = () => {
    // const newPerson = { id: Date.now() };
    setInputField([...inputField, { name: "", age: "" }]);
  };

  const handleSubmit = () => {};

  const handleDelete = () => {};

  console.log(inputField, "inputField============");
  return (
    <div className="main">
      {inputField.map((val, i) => {
        return (
          <PersonForm
            key={i}
            index={i}
            handleDelete={handleDelete}
            inputField={inputField}
            setInputField={setInputField}
          />
        );
      })}
    </div>
  );
};

export default App;
