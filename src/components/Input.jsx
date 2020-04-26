import React, { useState } from "react";

export default function (props) {
  console.log(props);
  const [name, setValue] = useState("");

  function handleChange(e) {
    console.log("e : ", e.target.value);
    setValue(e.target.value);
  }

  return (
    <div>
      <input
        placeHolder={props.name}
        onChange={handleChange}
        value={name}
        type="text"
      />
      <p>{name}</p>
    </div>
  );
}
