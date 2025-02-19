import React from "react";

const BarStats = ({ bottles }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      <li>Beer:{bottles.beer}</li>
      <li>Wine:{bottles.wine}</li>
      <li>Whiskey:{bottles.whiskey}</li>
    </ul>
  );
};

export default BarStats;
