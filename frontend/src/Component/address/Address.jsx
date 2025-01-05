import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styles from './Address.module.css'; // Assuming you have a CSS module
import { globalvar } from '../../GlobalContext/GlobalContext';

const CountryDropdown = () => {
  const [countries, setCountries] = useState([]); // State to store countries
  const [states, setStates] = useState([]); // State to store states
  const [selectedCountry, setSelectedCountry] = useState(''); // State for selected country
  const [selectedState, setSelectedState] = useState(''); // State for selected state
  
  const { setaddressPanel,setLoaderPanel,refreshId,setRefreshId } = useContext(globalvar);

  // Fetch countries data from API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoaderPanel(true);
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/states');
        const countryNames = response?.data.data.map(country => country); // Extracting country names
        setCountries(countryNames);
        setLoaderPanel(false);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  // Handle country selection and update states
  useEffect(() => {
    const filteredCountry = countries.find((ele) => ele.name === selectedCountry);
    setStates(filteredCountry?.states || []);
    setSelectedState(''); // Reset state selection when country changes
  }, [selectedCountry, countries]);

  // Close panel when clicking outside
  const handleOutsideClick = (e) => {
    e.stopPropagation();
    setaddressPanel(false);
  };

  // Submit Button Handler
  const handleSubmit = (e) => {
    e.stopPropagation();
    console.log('Selected Country:', selectedCountry);
    console.log('Selected State:', selectedState);
    localStorage.setItem('address',JSON.stringify({country:selectedCountry,city:selectedState}));
    setRefreshId(refreshId +1)
    setaddressPanel(false);
    setTimeout(()=>{
      setLoaderPanel(false);
    },1500)
  };

  // Cancel Button Handler
  const handleCancel = () => {
    setSelectedCountry('');
    setSelectedState('');
    setaddressPanel(false);
  };

  return (
    <section className={styles.mainContainer} onDoubleClick={handleOutsideClick}>
      <div className={styles.popupContainer} onClick={(e) => e.stopPropagation()}>
        <h2>Select Country & State</h2>

        {/* Country Dropdown */}
        <div className={styles.popupContainer1}>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className={styles.addressDropdown}
          >
            <option value="">Select Country</option>
            {countries?.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* State Dropdown */}
        <div className={styles.popupContainer1}>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className={styles.addressDropdown1}
          >
            <option value="">Select State</option>
            {states?.map((state, index) => (
              <option key={index} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div className={styles.popupActions}>
          <button onClick={handleSubmit} className={styles.saveBtn}>Submit</button>
          <button onClick={handleCancel} className={styles.closeBtn}>Cancel</button>
        </div>
      </div>
    </section>
  );
};

export default CountryDropdown;
