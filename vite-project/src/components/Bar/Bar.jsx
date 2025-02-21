import React, { useState } from "react";
import BarStats from "./BarStats";
import BarBtn from "./BarBtn";
import Modal from "../Modal/Modal";
import { Counter } from "../Counter";

const Bar = ({ count }) => {
  const [bottles, setBottles] = useState({
    beer: 0,
    wine: 0,
    whiskey: 0,
  });
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isOpen = () => setIsOpenModal(true);
  const isClose = () => setIsOpenModal(false);
  const addDrink = (drink) =>
    setBottles({ ...bottles, [drink]: bottles[drink] + 1 });

  return (
    <div>
      <BarStats bottles={bottles} />
      <BarBtn addDrink={addDrink} />
      <button type="button" onClick={isOpen}>
        open modal windows
      </button>

      {isOpenModal && <Modal isClose={isClose} />}
    </div>
  );
};

export default Bar;
