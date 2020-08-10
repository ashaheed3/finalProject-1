import React from 'react';
import './styleSheet.css';

const ProfileTwo = () => {
  return (
    <div className='container main-secction'>
      <div className='row'>
        <div className='col-md-12 col-sm-12 col-xs-12 image-section'>
          <img src='/images/foodThreeUpdate.jpg' alt='favorite food' />
        </div>

        <div className='col-md-12 col-sm-12 col-xs-12 user-profil-part'>
          <div className='row'>
            <div className='col-md-4 col-md-4-sm-12 col-xs-12 user-image text-center'>
              <div style={{ margin: '0px' }}>
                <img
                  style={{
                    width: '160px',
                    height: '160px',
                    borderRadius: '80px',
                  }}
                  src='https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png'
                />
                <h2>Hi, First Name!</h2>

                <h3>Member Since:</h3>
                <h3>Email:</h3>
              </div>
            </div>
            <div
              className='col-md-4 col-md-4-sm-12 col-xs-12'
              style={{ marginLeft: '650px' }}
            >
              <div style={{ padding: '0px', marginTop: '30px' }}>
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
                      <i class='utensils icon' style={{ color: '#844685' }}></i>
                      2
                    </div>
                    <div class='label'>Dietary Preferences</div>
                  </div>
                </div>
              </div>
              <div class='col-md-12 col-sm-12 col-xs-12 user-detail-section1 text-center'>
                <button
                  id='btn-contact'
                  data-target='#contact'
                  class='btn btn-success btn-block follow'
                >
                  Pescatarian
                </button>
                <button class='btn btn-warning btn-block'>Vegetarian</button>
              </div>
            </div>
            <div className='col-md-4 col-md-4-sm-12 col-xs-12'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTwo;
