import React from "react";

import { DraggableUserLIst } from "./containers/DraggableUserList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Drag 'n Drop sortable list</h2>
      <DraggableUserLIst />
    </div>
  );
}

export default App;
