import React from "react";
import css from "./Button.module.css";
import clsx from "clsx";
const button = ({ success, error, children }) => {
  const className = clsx(css.btn, success && css.success, error && css.error);
  return (
    <button type={button} className={className}>
      {children}
    </button>
  );
};

export default button;
