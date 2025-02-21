import React from "react";

const BarBtn = ({ addDrink, resetBottles }) => {
  return (
    <div>
      <button onClick={() => addDrink("beer")}>add beer</button>
      <button onClick={() => addDrink("wine")}>add wine</button>
      <button onClick={() => addDrink("whiskey")}>add whiskey</button>
      <button onClick={resetBottles}>zero</button>
    </div>
  );
};

export default BarBtn;
