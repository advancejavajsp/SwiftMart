import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styles from './EditProfile.module.css';
import { globalvar } from '../../GlobalContext/GlobalContext'; 
import toast from 'react-hot-toast';

function EditProfile() {
  const { user, setUser ,setEditProfile,setLoaderPanel} = useContext(globalvar);

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

    const fetchUserData = async () => {
      try {
      
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/open/swiftmart/email/${user.sub}`);
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

    try {
      setLoaderPanel(true)
      const response = await axios.put(`http://localhost:8080/open/swiftmart/update/${user.userId}`, {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
      });

   
      if (response.status === 200) {
        setUser((prevUser) => ({
          ...prevUser,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
        }));
        toast.success('Profile updated successfully!')
        setSuccessMessage('Profile updated successfully!');
        setError(''); 
      setTimeout(()=>{
        setLoaderPanel(false)
        setEditProfile(false)
      },1500)
      } else {
        toast.error('Failed to update profile.')
        setError('Failed to update profile.');
      }
    } catch (error) {
      setError('Failed to update profile.');
      toast.error('Failed to update profile.')
    }
  };

  return (
    <section className={styles['edit-container']}  onDoubleClick={(e)=>{e.stopPropagation(), setEditProfile(false)}}>
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
    </section>
  );
}

export default EditProfile;



