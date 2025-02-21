import React, { useEffect, useState } from "react";
import BarStats from "./BarStats";
import BarBtn from "./BarBtn";
import Modal from "../Modal/Modal";
import { Counter } from "../Counter";
const bottles = {
  beer: 0,
  wine: 0,
  whiskey: 0,
};

const Bar = ({ count }) => {
  const [bottles, setBottles] = useState(() => {
    const val = localStorage.getItem("bottles");
    const parseVal = JSON.parse(val) ?? bottles;
    return parseVal;
  });
  useEffect(() => {
    const stringified = JSON.stringify(bottles);
    localStorage.setItem("bottles", stringified);
  }, [bottles]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isOpen = () => setIsOpenModal(true);
  const isClose = () => setIsOpenModal(false);
  const addDrink = (drink) =>
    setBottles({ ...bottles, [drink]: bottles[drink] + 1 });
  const resetBottles = () =>
    setBottles({
      beer: 0,
      wine: 0,
      whiskey: 0,
    });
  return (
    <div>
      <BarStats bottles={bottles} />
      <BarBtn addDrink={addDrink} resetBottles={resetBottles} />
      <button type="button" onClick={isOpen}>
        open modal windows
      </button>

      {isOpenModal && <Modal isClose={isClose} />}
    </div>
  );
};

export default Bar;
