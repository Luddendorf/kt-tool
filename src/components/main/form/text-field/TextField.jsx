import React from "react";
import style from "./textFieldStyle";

const TextField = ({ name, type, onChange, onBlur, error, label }) => (
  <div style={style.inputGroup}>
    <label style={style.label}>
      {label}
    </label>
    <input
      style={style.input}
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <div style={style.error}>{error}</div>}
  </div>
);

export default TextField;
