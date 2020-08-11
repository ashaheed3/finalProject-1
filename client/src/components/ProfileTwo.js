import React from 'react';
import './styleSheet.css';

const ProfileTwo = ({
  firstName,
  username,
  emailAddress,
  avatar,
  date,
  preferences,
}) => {
  return (
    <div className='container main-secction'>
      <div className='row'>
        <div className='col-md-12 col-sm-12 col-xs-12 image-section'>
          <img src='/images/foodThreeUpdate.jpg' alt='favorite food' />
        </div>

        <div
          className='col-md-12 col-sm-12 col-xs-12 user-profil-part'
          style={{ paddingBottom: '80px' }}
        >
          <div className='col-md-6 col-md-6-sm-12 col-xs-12 user-image text-center'>
            <div style={{ margin: '0px' }}>
              <img
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '80px',
                }}
                src={avatar}
                alt='avatar'
              />
              <h2 style={{ color: ' #844685' }}>Hi, {firstName}!</h2>
              <h3 style={{ fontFamily: 'Arial', fontSize: '20px' }}>
                {username}
              </h3>
            </div>
          </div>
          <div
            className='col-md-4 col-md-4-sm-12 col-xs-12'
            style={{ marginLeft: '550px' }}
          >
            <div style={{ padding: '0px', marginTop: '40px' }}>
              <div
                class='ui statistics'
                style={{ borderBottom: '1px solid #301728FF' }}
              >
                <div class='tiny horizontal statistic'>
                  <div class='value'>
                    <i class='heart icon' style={{ color: '#844685' }}></i> 6
                  </div>
                  <div class='label'>Favorites</div>
                </div>
                <div class='tiny horizontal statistic'>
                  <div class='value'>
                    <i class='utensils icon' style={{ color: '#844685' }}></i>2
                  </div>
                  <div class='label'>Dietary Preferences</div>
                </div>
              </div>
            </div>
            <section className='users-info' style={{ marginTop: '50px' }}>
              <h3 style={{ fontFamily: 'Arial', fontSize: '20px' }}>
                Member Since: {date.toString()}
              </h3>
              <h3 style={{ fontFamily: 'Arial', fontSize: '20px' }}>
                Email: {emailAddress}
              </h3>
              {/* <h3 style={{ fontFamily: 'Arial', fontSize: '20px' }}>
                Preferences: {preferences}
              </h3> */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTwo;
