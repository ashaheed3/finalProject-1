import React from 'react';

import Favorites from '../components/Favorites';
import Profile from '../components/Profile';

const ProfilePage = () => {
  return (
    <div>
      <Profile />
      <Favorites />
    </div>
  );
};

export default ProfilePage;
