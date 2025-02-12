import React from "react";
import css from "./Account.module.css";
const Account = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.main}>
      <div>
        <img src={image} alt={name} className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.text}>{tag}</p>
        <p className={css.text}>{location}</p>
      </div>
      <ul className={css.list}>
        <li>
          <span className={css.text}>Followers:</span>{" "}
          <span className={css.text}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.text}>Views:</span>{" "}
          <span className={css.text}>{stats.views}</span>
        </li>
        <li>
          <span className={css.text}>Likes:</span>{" "}
          <span className={css.text}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Account;
