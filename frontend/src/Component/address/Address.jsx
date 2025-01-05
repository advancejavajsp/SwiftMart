import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styles from './Address.module.css'; 
import { globalvar } from '../../GlobalContext/GlobalContext';

const AddressDropdown = ({ addressId }) => {
  
  const [address, setAddress] = useState(null); 
  const { setaddressPanel, setLoaderPanel, refreshId, setRefreshId,userData } = useContext(globalvar);
  
  useEffect(() => {
    const address = localStorage.getItem("userDetails.address");

    
    if (address) {
      try {
        const parsedAddress = JSON.parse(address);
        setAddress(parsedAddress); 
      } catch (error) {
        console.error("Error parsing address from localStorage", error);
      }
    }
  }, []);
 
 

  return (
    <section>
      {address && (
        <div className={styles.addressDisplay}>
          <h3>Current Address:</h3>
          <p><strong>State:</strong> {address.state}</p>
          <p><strong>City:</strong> {address.city}</p>
          <p><strong>Pincode:</strong> {address.pincode}</p>
        </div>
      )}
    </section>
  );
};

export default AddressDropdown;
