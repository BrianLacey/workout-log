import React from "react";

export default function Dropdown(props) {
  const options = props.values.map((value, index) => (
    <option key={index + 1} value={value}>
      {value}
    </option>
  ));
  return (
    <div className="form-group form-group-spacing">
      <label htmlFor={props.name}>{props.label}:</label>
      <select
        className="form-control"
        name={props.name}
        onChange={props.onChange}
      >
        <option key="0" value="">
          {props.default}
        </option>
        {options}
      </select>
    </div>
  );
}
