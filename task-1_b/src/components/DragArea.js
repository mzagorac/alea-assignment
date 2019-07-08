import React, { useState, useContext } from "react";

import { Context } from "../containers/DragContext";

import { findDiv } from "../utils/findDiv";
import { switchElements } from "../utils/switchElements";

import "./styles/DragArea.css";

export function DragArea(props) {
  const [draggedOver, setDraggedOver] = useState();
  const { startedIndex } = useContext(Context);

  function dropHandler(event) {
    event.preventDefault();

    const draggedOverIndex =
      draggedOver.attributes["index"] &&
      draggedOver.attributes["index"].nodeValue;

    const changedItems = switchElements(
      props.items,
      startedIndex,
      draggedOverIndex
    );

    props.onChange(changedItems);
  }

  function dragOverHandler(event) {
    event.preventDefault();

    setDraggedOver(findDiv(event.target));
  }

  return (
    <div
      className="DragArea"
      id="target"
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
    >
      {props.children}
    </div>
  );
}
