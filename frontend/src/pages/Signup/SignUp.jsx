import React, { useContext, useState } from "react";
import style from "../Signup/SignUp.module.css";
import { globalvar } from "../../GlobalContext/GlobalContext";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  let { signupPanel, setSignuPanel, setLoginPanel } = useContext(globalvar);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.password &&
      formData.phone
     
    ) {
      console.log(e.name);
      let verify = await axios.post(
        `http://localhost:8080/auth/send-otp?email=${formData?.email}`
      );
      console.log(verify);
      if (verify === "123456") {
        let response = await axios.post(
          "http://localhost:8080/auth/signup",
          formData
        );
        console.log(response);
      }
    } else {
      toast.error("error");
    }
  };

  return (
    <div
      className={style["signup"]}
      onClick={(e) => {
        e.stopPropagation(), setSignuPanel(false), setLoginPanel(false);
      }}
    >
      <fieldset>
        <legend>SignUp</legend>
        <form
          onSubmit={handleSubmit}
          onClick={(e) => {
            e.stopPropagation(), setSignuPanel(true);
          }}
        >
          <div>
            <label>Username</label>
            <input
              className={style["username"]}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <label>Contact</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your contact number"
              required
            />
          </div>

          <div>
            <label>Image</label>
            <input
              type="file"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="Enter your address"
            />
          </div>

          <div className={style["signButton"]}>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default SignUp;
