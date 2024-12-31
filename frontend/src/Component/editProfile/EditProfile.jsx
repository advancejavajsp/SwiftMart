import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styles from './EditProfile.module.css';
import { globalvar } from '../../GlobalContext/GlobalContext';

function EditProfile() {
  const { user, setUser } = useContext(globalvar);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      setError('User not logged in.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setError('Authentication token missing.');
      return;
    }

    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/swiftmart/me/${user.sub}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data) {
          setFormData({
            fullName: response.data.name || '',
            email: response.data.email || '',
            phone: response.data.phone || '',
          });
          setError('');
        } else {
          setError('User data not found.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.phone.match(/^\d{10}$/)) {
      setError('Phone number must be 10 digits.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setError('Authentication token missing.');
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/open/swiftmart/update/${user.id}`,
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Profile updated:', response.data);

      setUser((prevUser) => ({
        ...prevUser,
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
      }));

      setSuccessMessage('Profile updated successfully!');
      setError('');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile.');
    }
  };

  return (
    <div className={styles['edit-profile']}>
      <h2>Edit Profile</h2>

      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {successMessage && <p className={styles.success}>{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            readOnly
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className={styles['save-button']}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
