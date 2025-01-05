import React, { useContext, useState } from 'react';
import { globalvar } from '../../GlobalContext/GlobalContext';
import toast from 'react-hot-toast';


const OtpPopup = ({mailOtp,verifiy}) => {
   let {otpRender, setOtpRender } = useContext(globalvar)
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setOtp(e.target.value);
    setError('');
  };

   let onClose=(e)=>{
    setOtpRender(false)
   }

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
    }else {
      toast.error("Wrong OTP! Please try again.");
      setError("OTP is incorrect")
    }
  };

  return (
    <div style={styles.overlay} onDoubleClick={(e)=>{e.stopPropagation(), setOtpRender(false);}}>
      <div style={styles.popupContainer} onClick={(e) => e.stopPropagation()}>
        <h3 style={styles.header}>Verify Email OTP</h3>
        <form onSubmit={handleVerify} style={styles.form}>
          <label htmlFor="otp" style={styles.label}>Enter OTP</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={handleInputChange}
            placeholder="Enter 6-digit Email OTP"
            style={styles.input}
          />
          {error && <p style={styles.error}>{error}</p>}
          <div style={styles.mainbuttonContainer}>
          <button type="submit" style={styles.button}>Verify</button>
          <button type="button" onClick={onClose} style={styles.closeButton}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  popupContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
    fontSize: '14px',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },
  error: {
    color: 'red',
    fontSize: '12px',
    marginBottom: '10px',
  },

  mainbuttonContainer:{
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },

  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  
    flex: 1,
  },
  closeButton: {
    padding: '10px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    flex: 1,
  },
};

export default OtpPopup;





