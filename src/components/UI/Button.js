import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className || "btn"}`}
      data-bs-toggle={props.tab}
      type={`${props.type || "button"}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
