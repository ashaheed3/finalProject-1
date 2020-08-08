import React from 'react';
import '../components/styleSheet.css';
import Favorites from '../components/Favorites';
//import Profile from '../components/Profile';
import ProfileTwo from '../components/ProfileTwo';

const ProfilePage = () => {
  return (
    <section className='profilebody'>
      <ProfileTwo />
      <Favorites />
    </section>
  );
};

export default ProfilePage;
