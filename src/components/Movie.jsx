import React, { useState, useEffect } from "react";
import { data as movies } from "../movie.json";

const baseStyle = {
  cursor: "pointer",
  //border: "solid 2px red",
};

export default function Movie() {
  const [select, setSelect] = useState(false);
  const [style, setStyle] = useState(baseStyle);

  useEffect(() => {
    // เอาไว้ทำการเดียวหลัง reload
    console.log("mounted"); // mounted
  }, []);

  useEffect(() => {
    console.log("updated", select);

    setStyle({
      ...baseStyle,
      border: select ? "solid 2px red" : "",
    });
  }, [select]); // state ที่เป็น select ทำการ update

  useEffect(() => {
    console.log("anything update"); // state ทุกตัวทำการ update หมด
  });

  function handleClick() {
    setSelect(!select);
  }

  return (
    <div>
      <h1>Movie</h1>
      {movies.map((each) => (
        <img
          key={each.id}
          onClick={handleClick}
          style={style}
          src={"http://localhost:3000/images/" + each.id + ".jpg"}
        />
      ))}
    </div>
  );
}
