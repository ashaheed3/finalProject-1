import React from 'react';
import RecipeCard from '../components/Layout/RecipeCard';

const Home = () => {
  return (
    <div className='container'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '20px 0px',
          borderBottom: '1px solid grey',
        }}
      >
        <div style={{ margin: '10px' }}>
          <img
            style={{ width: '160px', height: '160px', borderRadius: '80px' }}
            src='https://images.unsplash.com/photo-1564923630403-2284b87c0041?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          />
        </div>
        <div>
          <h4>Profile Name</h4>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '108%',
            }}
          >
            <h6>Member since:</h6>
            <h6>Saved recipes:</h6>
          </div>
        </div>
      </div>
      <div class='ui link cards'>
        <RecipeCard title='Chicken Noodle Soup' />
        <RecipeCard title='Lamb Chops' />
        <RecipeCard title='Pizza' />
        <RecipeCard title='Lamb Chops' />
        <RecipeCard title='Lamb Chops' />
        <RecipeCard title='Lamb Chops' />
      </div>
    </div>
  );
};

export default Home;
