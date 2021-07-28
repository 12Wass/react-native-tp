import React, { useState } from "react";
import Button from "../lib/Button";

export default function CredentialsForm({ onSubmit, selectedValue }) {
  const [values, setValues] = useState(
    selectedValue ?? {
      clientId: "",
      clientSecret: "",
    }
  );

  const _onSubmit = (event) => {
    event.preventDefault();
    if (selectedValue) onSubmit(values);
  };
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={_onSubmit}>
      <input value={values.clientId} onChange={handleChange} name="clientId" />
      <input
        value={values.clientSecret}
        onChange={handleChange}
        name="clientSecret"
        type="password"
      />
      <Button title="Submit" />
    </form>
  );
}
