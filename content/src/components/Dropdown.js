import React from "react";

export default function Dropdown(props) {
  const propsOptions = props.options.map((option, index) => (
    <option key={index + 1} value={option}>
      {option}
    </option>
  ));
  return (
    <div className="form-group form-group-spacing">
      <label htmlFor={props.name}>{props.label}:</label>
      <select
        className="form-control"
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      >
        <option key="0" value="">
          {props.default}
        </option>
        {propsOptions}
      </select>
    </div>
  );
}
