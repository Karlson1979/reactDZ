import React, { useState, useEffect } from "react";
import css from "./Modal.module.css";

const Modal = ({ isClose }) => {
  const [count, setCount] = useState(() => {
    const val = localStorage.getItem("countValue");
    const parseVal = JSON.parse(val) ?? 0;
    return parseVal;
  });
  useEffect(() => {
    const strFied = JSON.stringify(count);
    localStorage.setItem("countValue", strFied);
  }, [count]);
  const add = () => setCount(count + 1);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        isClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      isClose();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button type="button" onClick={isClose} className={css.closeModalBtn}>
          ❌
        </button>
        <h3 className={css.title}>Modal</h3>
        <p className={css.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet in
          doloremque laboriosam tempore reprehenderit maiores nobis eligendi ad
          ipsum facere!
        </p>
        <button onClick={add} type="button">
          increment: {count}
        </button>
        <p>значення лічильника: {count}</p>
      </div>
    </div>
  );
};
export default Modal;
