import React from 'react';

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
          <h2>Hi, First Name!</h2>
        </div>
        <div>
          <div
            style={{
              marginTop: '10px',
              width: '108%',
            }}
          >
            <h3>username:</h3>
            <br />
            <h3>Member since: 2020</h3>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '30px',
              width: '108%',
            }}
          >
            <div class='ui statistics'>
              <div class='ui small statistic'>
                <div class='value'>12</div>
                <div class='label'>Favorites</div>
              </div>

              <div class='ui small statistic'>
                <div class='value'>20</div>
                <div class='label'>Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
