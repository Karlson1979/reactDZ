import React from "react";
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
const App = () => {
  return (
    <div>
      <Account
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      {/* <Section>
        <Button>
          Click me <HiCursorClick size={24} />
        </Button>
        <Button success>
          Success <FaDiagramSuccessor size={24} />
        </Button>
        <Button error>
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
          />
        ))}
      </Section> */}
    </div>
  );
};

export default App;
