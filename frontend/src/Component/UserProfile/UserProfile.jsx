
import React, { useContext, useEffect, useState } from 'react';
import QRCode from 'react-qr-code';  
import style from "./UserProfile.module.css"; 
import axios from 'axios';
import { globalvar } from '../../GlobalContext/GlobalContext';

function UserProfile() {

  let {user, setUser} = useContext(globalvar);
  let [fetchedUserdata, setFetchedUserdata] = useState();
   
  let {userProfilePanel , setUserProfilePanel,setEditProfile}=useContext(globalvar)

  let getUserData=async()=>{
    let response = user && await axios.get(`http://localhost:8080/open/swiftmart/email/${user?.sub}`)
    setFetchedUserdata(response.data);
  }

  useEffect(()=>{
    getUserData();
  },[user]);

  const getUserProfileQRData = (fetchedUserdata) => {
    return `Name: ${fetchedUserdata?.name}\nEmail: ${fetchedUserdata?.email}`;
  };

  
  const qrData = getUserProfileQRData(fetchedUserdata);  
  return (
    <section className={style['user-main']} onDoubleClick={(e)=>{e.stopPropagation(),setUserProfilePanel(false) }}>
    <div className={style['user-profile']}>
      <div className={style['profile-header']}>
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className={style['profile-picture']}
        />
        <h3>{fetchedUserdata?.name}</h3>
        <p>Email: {fetchedUserdata?.email}</p>
      </div>

      <div className={style['qr-section']}>
        <h4>Scan the QR Code for Profile Info</h4>
        <QRCode value={qrData} size={150} />
      </div>

      <div className={style['user-details']}>
        <h4>Personal Information</h4>
        <p>Full Name: {fetchedUserdata?.name}</p>
        <p>Address: {fetchedUserdata?.address[0].city}</p>
        <p>{fetchedUserdata?.phone}</p>
        <button className={style['edit-button']} onClick={(e)=>{e.stopPropagation(), setEditProfile(true),setUserProfilePanel(false)}}>Edit Profile</button>
      </div>

      <div className={style['user-orders']}>
        <h4>Order History</h4>
        <ul>
          <li>Order #1: 2 Items - Delivered</li>
          <li>Order #2: 1 Item - Shipped</li>
        </ul>
      </div>
    </div>
    </section>
  );
}

export default UserProfile;
