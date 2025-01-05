
import React, { useContext, useEffect, useState } from "react";
import style from "../Signup/SignUp.module.css";
import { globalvar } from "../../GlobalContext/GlobalContext";
import axios from "axios";
import toast from "react-hot-toast";
import OtpPopup from "../otpPopup/OtpPopup";

const SignUp = () => {
  let { signupPanel, setLoaderPanel, setSignuPanel, setLoginPanel, otpRender, setOtpRender } = useContext(globalvar);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    addresses: [{
      city: "",
      state: "", 
      pincode: "",
    }]
  });

  const [mailVerified, setMailVerified] = useState("notVerified");
  const [otp, setOtp] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [states, setStates] = useState([]);

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setOtpVerified(false);  
      setOtp('');  
      setMailVerified("notVerified");  
    }

    if (name in formData.addresses[0]) {
      setFormData((prevState) => ({
        ...prevState,
        addresses: [{
          ...prevState.addresses[0],
          [name]: value,
        }]
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

 
  const handleSubmit = async (e) => {
    e?.preventDefault();

    const phone = formData.phone;
    const phoneRegex = /^[7-9][0-9]{9}$/;

    if (!phoneRegex.test(phone)) {
      toast.error("Enter a 10-digit phone number, starting with 7 or higher");
      return;
    }

    if (formData.name.length <= 3) {
      toast.error("Username must be more than 3 characters.");
      return;
    }

    if (String(formData.addresses[0].pincode).length !== 6) {
      toast.error("Pincode must be 6 digits.");
      return;
    }

    if (
      formData.name &&
      formData.email &&
      formData.password &&
      formData.phone &&
      formData.addresses[0].city &&
      formData.addresses[0].state &&
      formData.addresses[0].pincode
    ) {
      if (!otpVerified) {
        setOtpRender(true);
        setLoaderPanel(true);
        let verify = await axios.post(
          `http://localhost:8080/auth/send-otp?email=${formData?.email}`
        );
        setLoaderPanel(false);
        setOtp(verify.data);
      }

      if (otpVerified) {
        setLoaderPanel(true);
        formData.addresses[0].pincode = parseInt(formData.addresses[0].pincode);
        try {
          let response = await axios.post(
            "http://localhost:8080/auth/signup",
            formData
          );
          setLoaderPanel(false);
          toast.success("SignUp Successfully");
          setTimeout(() => {
            setSignuPanel(false);
          }, 1500);
        } catch (error) {
          setLoaderPanel(false);
          console.log(formData);
          console.log(error);
          toast.error(error.response.data);
        }
      }
    } else {
      toast.error("All fields are required!");
    }
  };

  const getStates = async () => {
    try {
      const response = await axios.get("http://localhost:8080/open/swiftmart/allstate");
      setStates(response.data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  useEffect(() => {
    getStates();
  }, []);

  useEffect(() => {
    if (mailVerified === "verified") {
      handleSubmit();
      console.log(mailVerified);
    }
  }, [mailVerified]);

  return (
    <>
      {otpRender && <OtpPopup mailOtp={otp} verifiy={setOtpVerified} mailStatus={setMailVerified} />}
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
              <label>City</label>
              <input
                className={style["city"]}
                type="text"
                name="city"
                value={formData.addresses[0].city}
                onChange={handleInputChange}
                placeholder="Enter your city"
                required
              />
            </div>

            <div>
              <label>State</label>
              <select
                className={style["state"]}
                name="state"
                value={formData.addresses[0].state}
                onChange={handleInputChange}
                required
              >
                <option value="">Select State</option>
                {states.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Pincode</label>
              <input
                className={style["pincode"]}
                type="text"
                name="pincode"
                value={formData.addresses[0].pincode}
                onChange={handleInputChange}
                placeholder="Enter your pincode"
                required
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
}

export default SignUp;
