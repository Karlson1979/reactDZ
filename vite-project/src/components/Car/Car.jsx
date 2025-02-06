import React from "react";
import css from "../Product/Product.module.css";
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
      <p>status:{status}</p>
    </div>
  );
};

export default Car;
