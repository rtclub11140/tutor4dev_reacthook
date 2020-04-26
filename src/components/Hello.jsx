import React from "react";

export default function Hello() {
  let counter = 1;

  setTimeout(() => {
    counter = 2;
    console.log(counter);
  }, 2000);

  return (
    <div>
      <h1>Hello {counter}</h1>
    </div>
  );
}
