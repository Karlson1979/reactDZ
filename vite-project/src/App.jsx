import React, { useState } from "react";
import profileData from "./profile.json";
import Profile from "./components/Profile/Profile";
import Section from "./components/Section/Section";
import Car from "./components/Car/Car";
import carData from "./carData.json";
import productData from "./productData.json";
import Product from "./components/Product/Product";
import Button from "./components/Button/Button";
import { BiSolidError } from "react-icons/bi";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { HiCursorClick } from "react-icons/hi";
import Account from "./components/Account/Account";
import userData from "../src/userData.json";
import FriendList from "./components/FriendList/FriendList";
import friendData from "./components/FriendList/friendData.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import itemsData from "./components/TransactionHistory/itemsData.json";
import { Counter } from "./components/Counter";
import Bar from "./components/Bar/Bar";
import Modal from "./components/Modal/Modal";

const App = () => {
  const handleClick = (massage) => {
    console.log(massage);
  };
  const clickBtn = (brand, model) => {
    console.log(brand, model);
  };

  return (
    <div>
      <Section>
        <Bar />
      </Section>

      {/* <TransactionHistory items={itemsData} />
      <FriendList friends={friendData} />

      <Account
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      /> */}
      <Counter />
      <Section>
        <Button onClick={() => handleClick("click 1")}>
          Click me <HiCursorClick size={24} />
        </Button>
        <Button success onClick={() => handleClick("click 2")}>
          Success <FaDiagramSuccessor size={24} />
        </Button>
        <Button error onClick={() => handleClick("click 3")}>
          Error <BiSolidError size={24} />
        </Button>
      </Section>
      <Section title={"Profile"}>
        {profileData.map((profile) => (
          <Profile
            key={profile.id}
            name={profile.name}
            email={profile.email}
            background={profile.background}
            address={profile.physical_address}
            status={profile.status}
          />
        ))}
      </Section>
      <Section title={"Car"}>
        {carData.map((car) => (
          <Car
            key={car.id}
            brand={car.brand}
            model={car.model}
            year={car.year}
            color={car.color}
            engine={car.engine}
            fuel_type={car.fuel_type}
            transmission={car.transmission}
            drive_type={car.drive_type}
            price={car.price}
            status={car.status}
            clickBtn={clickBtn}
          />
        ))}
      </Section>
      <Section title={"Product"}>
        {productData.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            category={product.category}
            brand={product.brand}
            price={product.price}
            status={product.status}
          />
        ))}
      </Section>
    </div>
  );
};

export default App;
