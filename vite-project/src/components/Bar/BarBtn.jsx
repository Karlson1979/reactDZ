import React from "react";

const BarBtn = ({ addDrink }) => {
  return (
    <div>
      <button onClick={() => addDrink("beer")}>add beer</button>
      <button onClick={() => addDrink("wine")}>add wine</button>
      <button onClick={() => addDrink("whiskey")}>add whiskey</button>
    </div>
  );
};

export default BarBtn;
