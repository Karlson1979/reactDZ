import React from "react";
import css from "./Button.module.css";
import clsx from "clsx";
const button = ({ success, error, children, onClick }) => {
  const className = clsx(css.btn, success && css.success, error && css.error);
  const clickBtn = (beer) => {
    console.log(beer);
  };
  return (
    <button onClick={onClick} type="button " className={className}>
      {children}
    </button>
  );
};

export default button;
