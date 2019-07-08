import React from "react";
import "./styles/User.css";

export function User(props) {
  return (
    <div>
      <h3>User:</h3>
      <ul className="UserList">
        {Object.keys(props.info).map((item, index) => {
          if (item === "phone") {
            return (
              <ul className="UserList_inner" key="phone">
                <h4 className="phoneHeader">Phone:</h4>
                {Object.keys(props.info.phone).map((it, i) => {
                  return (
                    <li className="UserListItem" key={it + { i }}>
                      <span className="userItem">{it}:</span>{" "}
                      {props.info.phone[it]}
                    </li>
                  );
                })}
              </ul>
            );
          }
          return (
            <li className="UserListItem" key={index}>
              <span className="userItem">{item}:</span> {props.info[item]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
