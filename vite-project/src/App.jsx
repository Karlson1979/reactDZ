import React from "react";
import profileData from "./profile.json";
import Profile from "./components/Profile";
import Section from "./components/Section/Section";
import Car from "./components/Car";
import carData from "./carData.json";
import productData from "./productData.json";
import Product from "./components/Product/Product";
const App = () => {
  return (
    <div>
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
      </Section>
    </div>
  );
};

export default App;
