import React, { useState } from "react";

const PersonForm = ({}) => {
  const [formData, setFormData] = useState([{ name: "", age: "" }]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFormData = [...formData];
    updatedFormData[index] = { ...updatedFormData[index], [name]: value };
    setFormData(updatedFormData);
  };
  console.log(formData, "formData");
  const handleAddField = () => {
    setFormData([...formData, { name: "", age: "" }]);
  };

  const handleRemoveField = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  const handleSubmit = () => {
    // You can access all form data in formData array
    console.log(formData);
  };

  return (
    <div className="container">
      {formData.map((person, index) => (
        <div className="box" key={index}>
          <input
            type="text"
            name="name"
            value={person.name}
            onChange={(e) => handleInputChange(index, e)}
            placeholder="Name"
          />
          <input
            type="number"
            name="age"
            value={person.age}
            onChange={(e) => handleInputChange(index, e)}
            placeholder="Age"
          />
          {index > 0 && (
            <button onClick={() => handleRemoveField(index)}>Remove</button>
          )}
        </div>
      ))}
      <div className="btn_box"></div>
      <button onClick={handleAddField}>Add More</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PersonForm;
