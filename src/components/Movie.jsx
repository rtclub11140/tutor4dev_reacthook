import React, { useState, useEffect } from "react";
import { data as movies } from "../movie.json";

const baseStyle = {
  cursor: "pointer",
};

export default function Movie() {
  const [select, setSelect] = useState({});

  function style(id) {
    return {
      ...baseStyle,
      border: select[id] ? "solid 2px black" : "",
    };
  }

  function handleClick(id) {
    console.log([id]);
    setSelect({ ...select, [id]: !select[id] });
    // {1: true, 2: true}
  }

  return (
    <div>
      <h1>Movie</h1>
      {movies.map((each) => (
        <img
          key={each.id}
          onClick={() => handleClick(each.id)}
          style={style(each.id)}
          src={"http://localhost:3000/images/" + each.id + ".jpg"}
        />
      ))}
    </div>
  );
}
