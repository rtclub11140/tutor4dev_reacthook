import React from "react";
import Input from "./Input.jsx";

export default function () {
  return (
    <div>
      <h1>Form</h1>
      <Input name="name" />
      <Input name="surname" />
      {/* <input onChange={handleChangeName} value={name} type="text" />
      <input onChange={handleChangeSurName} value={surName} type="text" />
      <p>{name}</p>
      <p>{surName}</p> */}
    </div>
  );
}
