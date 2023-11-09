import React from "react";
import './style.css'

const Input = ({ type, placeholder,minLength, value, onChange, icon }) => {
  return (
    <div className="input-container">
      {icon && <span className="input-icon">{icon}</span>}
      <input
      minLength={minLength}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
