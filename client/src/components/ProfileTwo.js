import React from 'react';
import './styleSheet.css';

const ProfileTwo = () => {
  return (
    <div className='container main-secction'>
      <div className='row'>
        <div className='col-md-12 col-sm-12 col-xs-12 image-section'>
          <img src='/images/foodThreeUpdate.jpg' alt='favorite food' />
        </div>
        <div className='row user-left-part'>
          <div className='col-md-3 col-sm-3 col-xs-12 user-profil-part pull-left'>
            <div className='row'>
              <div className='col-md-12 col-md-12-sm-12 col-xs-12 user-image text-center'>
                <img
                  src='https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png'
                  className='rounded-circle'
                  alt='Profile Picture'
                />
              </div>
              <div className='col-md-12 col-sm-12 col-xs-12 user-detail-section1 text-center'>
                <button
                  id='btn-contact'
                  data-toggle='modal'
                  data-target='#contact'
                  className='btn btn-success btn-block follow'
                >
                  Contact Me
                </button>
                <button className='btn btn-warning btn-block'>
                  Placeholder
                </button>
              </div>
              <div className='row user-detail-row'>
                <div className='col-md-12 col-sm-12 user-detail-section2 pull-left'>
                  <div className='border'></div>
                  <p>FOLLOWER</p>
                  <span>320</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-9 col-sm-9 col-xs-12 pull-right profile-right-section'>
            <div className='row profile-right-section-row'>
              <div className='col-md-12 profile-header'>
                <div className='row'>
                  <div className='col-md-8 col-sm-6 col-xs-6 profile-header-section1 pull-left'>
                    <h1>Name</h1>
                    <h5>Tag Line</h5>
                  </div>
                  <div className='col-md-4 col-sm-6 col-xs-6 profile-header-section1 text-right pull-rigth'>
                    <a
                      href='/myKitchen.html'
                      className='btn btn-primary btn-block'
                    >
                      My Kitchen
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-8'>
                    <ul className='nav nav-tabs' role='tablist'>
                      <li className='nav-item'>
                        <a
                          className='nav-link active'
                          href='#profile'
                          role='tab'
                          data-toggle='tab'
                        >
                          <i className='fas fa-user-circle'></i>User Profile
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className='nav-link'
                          href='#buzz'
                          role='tab'
                          data-toggle='tab'
                        >
                          <i className='fas fa-info-circle'></i>More Information
                        </a>
                      </li>
                    </ul>

                    <div className='tab-content'>
                      <div
                        role='tabpanel'
                        className='tab-pane fade show active'
                        id='profile'
                      >
                        <div className='row'>
                          <div className='col-md-2'>
                            <label>ID</label>
                          </div>
                          <div className='col-md-6'>
                            <p>509230671</p>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-md-2'>
                            <label>Name</label>
                          </div>
                          <div className='col-md-6'>
                            <p>Crystal Smith</p>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-md-2'>
                            <label>Email</label>
                          </div>
                          <div className='col-md-6'>
                            <p>csmith@gmail.com</p>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-md-2'>
                            <label>Telephone</label>
                          </div>
                          <div className='col-md-6'>
                            <p>12345678</p>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-md-2'>
                            <label>Favorite Food</label>
                          </div>
                          <div className='col-md-6'>
                            <p>Pasta</p>
                          </div>
                        </div>
                      </div>
                      <div role='tabpanel' className='tab-pane fade' id='buzz'>
                        <div className='row'>
                          <div className='col-md-6'>
                            <label>Cooking Level</label>
                          </div>
                          <div className='col-md-6'>
                            <p>Expert</p>
                          </div>
                        </div>

                        <div className='row'>
                          <div className='col-md-12'>
                            <label>Your Bio</label>
                            <br />
                            <p>Your detail description</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 img-main-rightPart'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='row image-right-part'>
                          <div className='col-md-6 pull-left image-right-detail'>
                            <h6>Favorite Food</h6>
                          </div>
                        </div>
                      </div>
                      <a href='/myKitchen.html'>
                        <div className='col-md-12 image-right'>
                          <img src='/public/assets/images/foodOne.jpg' />
                        </div>
                      </a>
                      <div className='col-md-12 image-right-detail-section2'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTwo;
