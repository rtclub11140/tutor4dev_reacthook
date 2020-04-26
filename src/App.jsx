import React from "react";
import useFormInput from "./use-form-input";

export default function App() {
  const [name, handleNameChange] = useFormInput("John");
  const [surname, handleSurnameChange] = useFormInput("Doe");

  return (
    <div>
      <input onChange={handleNameChange} value={name} type="text" />
      <p>{name}</p>
      <hr />
      <input onChange={handleSurnameChange} value={surname} type="text" />
      <p>{surname}</p>
    </div>
  );
}
