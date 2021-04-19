import React from "react";
import style from "./textFieldStyle";

const TextField = ({ value, name, type, onChange, onBlur, label, placeholder }) => (
  <div style={style.inputGroup}>
    <label style={style.label}>{label}</label>
    <input
      value={value}
      style={style.input}
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  </div>
);

export default TextField;
