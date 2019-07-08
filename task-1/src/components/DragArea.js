import React, { useState } from "react";
import { findDiv } from "../utils/findDiv";

const style = {
  width: "350px",
  backgroundColor: "#FBFDFD",
  border: "1px solid #BDBDBD",
  margin: "30px auto",
  padding: "5px 5px 150px 5px",
  boxShadow: "5px 5px 12px 5px #A4A4A4"
};

export function DragArea(props) {
  const [user, setUser] = useState();

  function dropHandler(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");

    const draggedElement = document.getElementById(data);
    const parent = document.getElementById("target");

    if (parent === user)
      event.target.appendChild(document.getElementById(data));
    else parent.insertBefore(draggedElement, user);
  }

  function dragOverHandler(event) {
    event.preventDefault();

    setUser(findDiv(event.target));
  }

  return (
    <div
      id="target"
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
      style={style}
    >
      {props.children}
    </div>
  );
}
