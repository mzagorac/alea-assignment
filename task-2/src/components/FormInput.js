import React, { useContext } from "react";

import { Context } from "../containers/FormContext";

import { getValue } from "../utils/getValue";

import "./styles/FormInput.css";

export function FormInput(props) {
  const { changeHandler, userInfo } = useContext(Context);

  return (
    <input
      className="FormInput"
      {...props}
      onChange={changeHandler}
      value={getValue(props.name, props.value, userInfo)}
    />
  );
}
