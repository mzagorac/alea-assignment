import React, { useState } from "react";
import { DragArea } from "../components/DragArea";
import { DragItem } from "../components/DragItem";

const usersList = [
  {
    id: 1,
    name: "1",
    email: "userone@test.com"
  },
  {
    id: 2,
    name: "2",
    email: "usertwo@test.com"
  },
  {
    id: 3,
    name: "3",
    email: "userthree@test.com"
  },
  {
    id: 4,
    name: "4",
    email: "userfour@test.com"
  },
  {
    id: 5,
    name: "5",
    email: "userfive@test.com"
  }
];

const liStyle = {
  margin: "5px",
  listStyle: "none"
};

export function DraggableUserLIst() {
  const [users, setUsers] = useState(usersList);

  return (
    <ul>
      <DragArea>
        {users.map((user, i) => (
          <DragItem id={user.id} index={i} key={user.id}>
            <li style={liStyle}>
              <span>{user.name}, </span>
              <span>{user.email}</span>
            </li>
          </DragItem>
        ))}
      </DragArea>
    </ul>
  );
}
