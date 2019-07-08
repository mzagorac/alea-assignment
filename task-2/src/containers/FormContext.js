import React, { useState } from "react";

export const Context = React.createContext();

export function FormContext(props) {
  const [userInfo, setUserInfo] = useState(props.initialValues);

  function changeHandler(event) {
    const info = { ...userInfo, phone: { ...userInfo.phone } };

    if (event.target.name.startsWith("phone")) {
      const phone = event.target.name.split(".");
      info["phone"][phone[1]] = event.target.value;
    } else {
      info[event.target.name] = event.target.value;
    }

    setUserInfo(info);
  }

  return (
    <Context.Provider value={{ changeHandler, userInfo }}>
      {props.children}
    </Context.Provider>
  );
}
