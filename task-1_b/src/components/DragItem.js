import React, { useContext } from "react";
import { Context } from "../containers/DragContext";
import "./styles/DragItem.css";

export function DragItem(props) {
  const { getStartedIndex } = useContext(Context);

  function dragStartHandler(event) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text", event.target.id);
    getStartedIndex(event.target.attributes["index"].value);
  }

  return (
    <div
      className="DragItem"
      id={props.id}
      index={props.index}
      draggable
      onDragStart={dragStartHandler}
    >
      {props.children}
    </div>
  );
}
