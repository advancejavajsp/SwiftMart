import React, { useContext, useState } from 'react';
import { globalvar } from '../../GlobalContext/GlobalContext';
import toast from 'react-hot-toast';
import styles from "../otpPopup/otpPopup.module.css";

const OtpPopup = ({mailOtp,verifiy}) => {
   let {otpRender, setOtpRender } = useContext(globalvar)
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setOtp(e.target.value);
    setError('');
  };

   let onClose=(e)=>{
    setOtpRender(!otpRender);
   };

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError('OTP must be 6 digits long');
      return;
    }
    console.log("otp: ", otp);
    console.log("mailOtp : ", mailOtp)

    if (otp == mailOtp) {
        toast.success("Otp Verified Succesfully")
       setTimeout(()=>{
        verifiy(true)
   setOtpRender(false)
       },1500)
    }
  };

  return (
    <div className={styles.overlay} onClick={(e)=>{e.stopPropagation(), setOtpRender(false)}}>
      <div className={styles.popupContainer} onClick={(e)=>{e.stopPropagation(), setOtpRender(true)}}>
        <h3 className={styles.header}>Verify OTP</h3>
        <form onSubmit={handleVerify} className={styles.form}>
          <label htmlFor="otp" className={styles.label}>Enter OTP</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={handleInputChange}
            placeholder="Enter 6-digit OTP"
            className={styles.input}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.button}>Verify</button>
          <button type="button" onClick={onClose} className={styles.closeButton}>Close</button>
        </form>
      </div>
    </div>
  );
};


export default OtpPopup;
