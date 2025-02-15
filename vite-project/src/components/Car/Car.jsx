import React from "react";
import css from "../Product/Product.module.css";
import style from "../Button/Button.module.css";
const Car = ({
  brand,
  model,
  year,
  color,
  engine,
  fuel_type,
  transmission,
  drive_type,
  price,
  status,
  clickBtn,
}) => {
  return (
    <div className={css.children}>
      <p>brand:{brand}</p>
      <p>model:{model}</p>
      <p>year:{year}</p>
      <p>color:{color}</p>
      <p>engine:{engine}</p>
      <p>fuel_type:{fuel_type}</p>
      <p>transmission:{transmission}</p>
      <p>drive_type:{drive_type}</p>
      <p>price:{price}</p>
      <p>status:{status === "в наличии" ? "✅" : "❌"}</p>
      <button
        className={style.btn}
        type="button"
        onClick={() => clickBtn(brand, model)}
      >
        BRAND
      </button>
    </div>
  );
};

export default Car;
