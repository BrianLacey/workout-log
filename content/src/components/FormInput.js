import React from "react";

export default function FormInput(props) {
  return (
    <div className="form-group form-group-spacing">
      <label htmlFor={props.name}>{props.label}:</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="form-control"
      />
    </div>
  );
}
