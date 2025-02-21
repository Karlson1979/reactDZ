import React, { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(() => {
    const val1 = localStorage.getItem("countValue1");
    const parseVal1 = JSON.parse(val1) ?? 0;
    return parseVal1;
  });
  useEffect(() => {
    const stringify = JSON.stringify(count);
    localStorage.setItem("countValue1", stringify);
  }, [count]);
  const add = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", fontSize: "30px", padding: "20px" }}>
      <p>counter:{count}</p>
      <button type="button" onClick={add}>
        +
      </button>
      <button type="button" onClick={dec}>
        -
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
    </div>
  );
};
