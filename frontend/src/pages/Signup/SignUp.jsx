
import React, { useContext, useState } from "react";
import style from "../Signup/SignUp.module.css";
import { globalvar } from "../../GlobalContext/GlobalContext";
import axios from "axios";
import toast from "react-hot-toast";
import OtpPopup from "../otpPopup/OtpPopup";

const SignUp = () => {
  let { signupPanel, setSignuPanel, setLoginPanel, otpRender, setOtpRender } = useContext(globalvar);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
    phone: "",
  });

  const [otp, setOtp] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password && formData.phone) {
      if (!otpVerified) {
        setOtpRender(true);
        let verify = await axios.post(
          `http://localhost:8080/auth/send-otp?email=${formData?.email}`
        );
        console.log(verify);
        setOtp(verify.data);
      }

      if (otpVerified) {
        let response = await axios.post(
          "http://localhost:8080/auth/signup",
          formData
        );
        console.log(response);
        toast.success("SignUp Successfully");
        setTimeout(() => {
          setSignuPanel(false);
        }, 1500);
      }
    } else {
      toast.error("All fields are required!");
    }
  };

  return (
    <>
      {otpRender && <OtpPopup mailOtp={otp} verifiy={setOtpVerified} />}
      <div
        className={style["signup"]}
        onClick={(e) => {
          e.stopPropagation();
          setSignuPanel(false);
          setLoginPanel(false);
        }}
      >
        <div
          className={style["form-container"]}
          onClick={(e) => {
            e.stopPropagation();
            setSignuPanel(true);
          }}
        >
          <div className={style["form-title"]}>SignUp</div>
          <form onSubmit={handleSubmit}>
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
               className={style["email"]}
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
               className={style["password"]}
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
               className={style["contact"]}
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
              className={style["img"]}
                type="file"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
              />
            </div>

            <div className={style["signButton"]}>
              <button type="submit">
                {otpVerified ? "Sign Up" : "Get OTP"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
