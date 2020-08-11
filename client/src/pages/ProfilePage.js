import React from 'react';
import '../components/styleSheet.css';
import Favorites from '../components/Favorites';
import UserProfile from '../components/UserProfile';

const ProfilePage = () => {
  return (
    <section className='profilebody'>
      <UserProfile />
      <Favorites />
    </section>
  );
};

export default ProfilePage;
