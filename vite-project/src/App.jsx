import React from "react";
import profileData from "./profile.json";
import Profile from "./components/Profile";
import Section from "./components/Section";
import Car from "./components/Car";
import carData from "./carData.json";
const App = () => {
  return (
    <div>
      <Section>
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
    </div>
  );
};

export default App;
