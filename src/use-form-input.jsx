import React, { useState } from "react";

export default function useFormInput(initValue) {
  const [value, setValue] = useState(initValue);
  function handleChange(e) {
    setValue(e.target.value);
  }

  return [value, handleChange];
}
