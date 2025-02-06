import React from "react";
import { Children } from "react";
import css from "./Product.module.css";

const Product = ({ name, category, brand, price, status }) => {
  return (
    <div className={css.children}>
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Category:</b> {category}
      </p>
      <p>
        <b>Brand:</b> {brand}
      </p>
      <p>
        <b>Price:</b> ${price}
      </p>
      <p>
        <b>Status:</b>
        {status === "no" ? "❌ Нет в наличии" : "✅ В наличии"}
      </p>
    </div>
  );
};

export default Product;
