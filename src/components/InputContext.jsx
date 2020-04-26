import React, { useState, createContext, useContext } from "react";

const PersonContext = createContext(); // ควรแยกไฟล์

function Input(props) {
  // child ใช้งาน useContext()
  const { person, setPerson } = useContext(PersonContext);

  function handleChange(e) {
    setPerson({
      ...person,
      [props.field]: e.target.value,
    });
  }

  return (
    <div>
      <input
        onChange={handleChange}
        value={person[props.field]}
        placeholder={props.field}
        type="text"
      />
    </div>
  );
}

export default function App() {
  const [person, setPerson] = useState({ name: "John", surname: "Doe" });

  return (
    <div>
      <pre>{JSON.stringify(person)}</pre>

      {/* parent ใช้งาน .Provider */}
      <PersonContext.Provider value={{ person, setPerson }}>
        <Input field="name" />
        <Input field="surname" />
      </PersonContext.Provider>
    </div>
  );
}
