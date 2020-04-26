import React from "react";
// import useFormInput from "./use-form-input";
import Movie from "./components/Movie.jsx";

export default function App() {
  return (
    <div>
      <Movie />
    </div>
  );
}

//  export default function App() {
//   const [name, handleNameChange] = useFormInput("John");
//   const [surname, handleSurnameChange] = useFormInput("Doe");

//   return (
//     <div>
//       <input onChange={handleNameChange} value={name} type="text" />
//       <p>{name}</p>
//       <hr />
//       <input onChange={handleSurnameChange} value={surname} type="text" />
//       <p>{surname}</p>
//     </div>
//   );
// }
