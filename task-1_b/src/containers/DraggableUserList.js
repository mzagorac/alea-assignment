import React, { useState } from "react";
import { DragArea } from "../components/DragArea";
import { DragItem } from "../components/DragItem";
import { DragContext } from "../containers/DragContext";

const usersList = [
  {
    id: 1,
    name: "First User",
    email: "userone@test.com"
  },
  {
    id: 2,
    name: "Second User",
    email: "usertwo@test.com"
  },
  {
    id: 3,
    name: "Third User",
    email: "userthree@test.com"
  },
  {
    id: 4,
    name: "Fourth User",
    email: "userfour@test.com"
  },
  {
    id: 5,
    name: "Fifth User",
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
    <DragContext>
      <ul>
        <DragArea items={users} onChange={newList => setUsers(newList)}>
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
    </DragContext>
  );
}
