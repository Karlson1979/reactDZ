import React from "react";
// "id": 1,
//     "name": "Аляшко Александрович",
//     "email": "example@example.com",
//     "background": "Физико-математическое и юридическое образование",
//     "physical_address": "Киев, Украина",
//     "status": "онлайн"
const ProfileForm = () => {
  return (
    <form>
      <label>
        <p>Name:</p>
        <input type="text" name="name" placeholder="input name" required />
      </label>
      <label>
        <p>Email:</p>
        <input type="email" name="email" placeholder="input email" required />
      </label>
      <label>
        <p>Physical_address:</p>
        <input
          type="text"
          name="physical_address"
          placeholder="input address"
          required
        />
      </label>
      <h3>Status:</h3>
      <label>
        <span>Онлайн</span>
        <input type="radio" name="status" value="Онлайн" required />
      </label>
      <label>
        <span>Офлайн</span>
        <input type="radio" name="status" value="Офлайн" required />
      </label>
      <button
        type="submit"
        style={{
          display: "block",
          margin: "0 auto",
          marginTop: "20px",
          padding: "15px",
          background: "green",
        }}
      >
        add profile 👤
      </button>
    </form>
  );
};

export default ProfileForm;
