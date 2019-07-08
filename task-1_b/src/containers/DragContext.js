import React, { useState } from "react";

export const Context = React.createContext();

export function DragContext(props) {
  const [startedIndex, setStartedIndex] = useState(0);

  function getStartedIndex(index) {
    setStartedIndex(index);
  }

  return (
    <Context.Provider value={{ startedIndex, getStartedIndex }}>
      {props.children}
    </Context.Provider>
  );
}
