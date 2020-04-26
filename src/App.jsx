import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(1);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>App {counter}</h1>
      <button onClick={handleClick}>Update</button>
      <button onClick={()=>setCounter(counter + 1);}>Update</button> {/* annonymus function การประกาศ function ลอยๆขึ้นมา */}
      <hr />
    </div>
  );
}
