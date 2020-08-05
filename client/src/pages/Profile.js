import React from 'react';
import RecipeCard from '../components/Layout/RecipeCard';
import Favorites from './Favorites';

const Profile = () => {
  return (
    <div
      className='container'
      style={{
        maxWidth: '1000px',
        backgroundColor: 'purple',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '20px 0px',
          borderBottom: '1px solid grey',
          padding: '16px',
        }}
      >
        <div style={{ margin: '10px' }}>
          <img
            style={{ width: '160px', height: '160px', borderRadius: '80px' }}
            src='https://images.unsplash.com/photo-1564923630403-2284b87c0041?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          />
          <h3>Profile Name</h3>
        </div>
        <div>
          <h3>Profile Name</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '108%',
            }}
          >
            <h6>Member since: 2020</h6>
            <h6>Saved recipes: 6</h6>
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
