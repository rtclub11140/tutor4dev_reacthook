import React, { useState } from "react";

export default function () {
  const [name, setName] = useState("John");

  function handleChange(e) {
    console.log("e : ", e.target.value);
    setName(e.target.value);
  }
  return (
    <div>
      <h1>Form</h1>
      <input onChange={handleChange} value={name} type="text" />
      <p>{name}</p>
    </div>
  );
}
