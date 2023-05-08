/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const FunctionForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
        ...form,
      [e.target.name]:e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange}/>
        <br></br>
        <br></br>
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange}/>
        <br></br>
        <br></br>
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange}/>
        <br></br>
        <br></br>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FunctionForm;
