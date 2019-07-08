import React from "react";

const style = {
  width: "320px",
  height: "25px",
  border: "1px solid #BDBDBD",
  backgroundColor: "white",
  margin: "5px auto",
  cursor: "grab",
  paddingBottom: "10px"
};

export function DragItem(props) {
  function dragStartHandler(event) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text", event.target.id);
  }

  return (
    <div id={props.id} draggable onDragStart={dragStartHandler} style={style}>
      {props.children}
    </div>
  );
}
