import React, { useState, useEffect } from "react";
import css from "./Modal.Module.css";

const Modal = ({ isClose }) => {
  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);

  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button type="button" onClick={isClose} className={css.closeModalBtn}>
          &times;
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
      </div>
    </div>
  );
};

export default Modal;
