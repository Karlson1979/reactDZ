import React from "react";
//  "id": 5,
//     "brand": "Tesla",
//     "model": "Model 3",
//     "year": 2023,
//     "color": "Красный",
//     "engine": "Электро",
//     "fuel_type": "Электричество",
//     "transmission": "Автомат",
//     "drive_type": "Полный",
//     "price": 45000,
//     "status": "в наличии"
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
    <div>
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
