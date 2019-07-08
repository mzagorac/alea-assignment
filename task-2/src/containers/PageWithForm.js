import React, { useState } from "react";
import { Form } from "../components/Form";
import { FormInput } from "../components/FormInput";
import { FormContext } from "./FormContext";
import { User } from "../components/User";

export function PageWithForm() {
  const [userInfo, setUserInfo] = useState({
    email: "example@alea.com",
    age: 30,
    name: "John Doe",
    phone: {
      ext: "00387",
      number: "65/123-456"
    }
  });

  const [hasUser, setHasUser] = useState(false);

  function renderUser() {
    return <User info={userInfo} />;
  }

  return !hasUser ? (
    <div>
      <FormContext initialValues={userInfo}>
        <Form
          onSubmit={vals => {
            setUserInfo(vals);
            setHasUser(true);
          }}
        >
          <FormInput
            type="email"
            required
            name="email"
            placeholder="your@email.com"
          />
          <FormInput type="number" name="age" />
          <FormInput type="text" required name="name" />
          <FormInput type="text" name="phone.ext" />
          <FormInput type="text" name="phone.number" />
          <FormInput id="submit" type="submit" value="Submit" />
        </Form>
      </FormContext>
    </div>
  ) : (
    renderUser()
  );
}
