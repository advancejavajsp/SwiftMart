
import React from 'react';
import QRCode from 'react-qr-code';  
import style from "./UserProfile.module.css"; 

function UserProfile() {
  const userData = {
    name: "Hemant Kumar Verma",
    email: "XXXXXXX@gmail.com",
  };

  const getUserProfileQRData = (userData) => {
    return `Name: ${userData.name}\nEmail: ${userData.email}`;
  };

  const qrData = getUserProfileQRData(userData);  
  return (
    <div className={style['user-profile']}>
      <div className={style['profile-header']}>
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className={style['profile-picture']}
        />
        <h3>{userData.name}</h3>
        <p>Email: {userData.email}</p>
      </div>

      <div className={style['qr-section']}>
        <h4>Scan the QR Code for Profile Info</h4>
        <QRCode value={qrData} size={150} />
      </div>

      <div className={style['user-details']}>
        <h4>Personal Information</h4>
        <p>Full Name: {userData.name}</p>
        <p>Address: Sector 14 Gurugram</p>
        <p>Phone: XXXXXXXXXX</p>
        <button className={style['edit-button']}>Edit Profile</button>
      </div>

      <div className={style['user-orders']}>
        <h4>Order History</h4>
        <ul>
          <li>Order #1: 2 Items - Delivered</li>
          <li>Order #2: 1 Item - Shipped</li>
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
