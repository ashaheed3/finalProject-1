import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import ProfileTwo from './ProfileTwo';

function UserProfile() {
  const [UserInfo, setUserInfo] = useState({
    _id: '',
    firstName: '',
    lastName: '',
    username: '',
    emailAddress: '',
    avatar: '',
    date: null,
    preferences: [],
  });

  const getUserInfo = async () => {
    const res = await API.getUser();
    console.log(res);
    setUserInfo(res.data);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const renderedProfile = (UserInfo) => {
    /*if (!UserInfo.length) {
      return <h1 className='text-center'>No profile info</h1>;
    }*/

    return (
      <ProfileTwo
        key={UserInfo._id}
        id={UserInfo._id}
        firstName={UserInfo.firstName}
        lastName={UserInfo.lastName}
        username={UserInfo.username}
        emailAddress={UserInfo.emailAddress}
        avatar={UserInfo.avatar} //what if no avi?
        date={UserInfo.date}
        preferences={UserInfo.preferences}
      />
    );
  };

  return (
    <div>
      <section>{renderedProfile(UserInfo)}</section>
    </div>
  );
}

export default UserProfile;