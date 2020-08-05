import React from 'react';

import Favorites from './Favorites';

const Profile = () => {
  return (
    <div
      className='container'
      style={{
        maxWidth: '1000px',
        backgroundColor: '#9F6B99FF',
        color: '#301728FF',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '20px 0px',
          borderBottom: '1px solid #301728FF',
          padding: '16px',
        }}
      >
        <div style={{ margin: '10px' }}>
          <img
            style={{ width: '160px', height: '160px', borderRadius: '80px' }}
            src='https://images.unsplash.com/photo-1564923630403-2284b87c0041?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          />
          <h3>Profile Name</h3>
          <h3>Member since: 2020</h3>
        </div>
        <div>
          <h3>Hi! Profile Name</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '20px',
              width: '108%',
            }}
          >
            <div class='ui statistics'>
              <div class='statistic'>
                <div class='value'>12</div>
                <div class='label'>Favorites</div>
              </div>

              <div class='statistic'>
                <div class='value'>20</div>
                <div class='label'>Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 style={{ textAlign: 'center' }}>My Favorite Recipes</h2>
        <Favorites />
      </div>
    </div>
  );
};

export default Profile;
