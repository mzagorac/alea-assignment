import React, { useContext } from "react";

import { Context } from "../containers/FormContext";

import { clearObject } from "../utils/clearObject";

import "./styles/Form.css";

export function Form(props) {
  const { userInfo } = useContext(Context);

  function submitHandler(event) {
    event.preventDefault();
    props.onSubmit(clearObject(userInfo));
  }

  return (
    <form className="Form" onSubmit={submitHandler}>
      {props.children}
    </form>
  );
}
