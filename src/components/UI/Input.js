import React from "react";

const Input = (props) => {
  return (
    <div className="col-md-6">
      <label
        htmlFor={`${props.htmlFor || "validationCustom"}`}
        className="form-label"
      >
        {props.label}
      </label>
      <input
        type={`${props.type || "text"}`}
        className={`${props.className || "form-control"}`}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        required
      />
    </div>
  );
};

export default Input;
