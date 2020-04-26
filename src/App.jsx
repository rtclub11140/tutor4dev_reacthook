import React from "react";
import Form from "./components/Form";

export default function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

// export default function App() {
//   const [counter, setCounter] = useState(1);
//   const [number, setNumber] = useState(100); // setNumber เอาไว้ update ค่าของ Number

//   function handleClick() {
//     setCounter(counter + 1);
//   }

//   return (
//     <div>
//       <h1>App {counter}</h1>
//       <button onClick={handleClick}>Update</button>
//       <button onClick={() => setCounter(counter + 1)}>Update</button>
//       {/* annonymus function การประกาศ function ลอยๆขึ้นมา */}
//       <hr />
//     </div>
//   );

// }
