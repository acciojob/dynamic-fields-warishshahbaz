import React, { useState } from "react";
import "./../styles/App.css";
import PersonForm from "./PersonalForm";

const App = () => {
  return (
    <div>
      <PersonForm />
      <h2>After clicking submit check console for data</h2>
    </div>
  );
};

export default App;
