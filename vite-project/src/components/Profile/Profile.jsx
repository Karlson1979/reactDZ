import React from "react";
import css from "./Product/Product.module.css";
const Profile = ({ name, email, background, address, status }) => {
  return (
    <div className={css.children}>
      <h3>name:{name}</h3>
      <p>email:{email}</p>
      <p>background:{background}</p>
      <p>address:{address}</p>
      <p>status:{status === "онлайн" ? "✅" : "❌"}</p>
    </div>
  );
};

export default Profile;
