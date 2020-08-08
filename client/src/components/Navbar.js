import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <ul className='nav nav-pills navbar-nav ml-auto'>
          <li>
            <a id='navBar' className='nav-item nav-link' href='home.html'>
              Home
            </a>
          </li>
          <li>
            <a id='navBar' className='nav-item nav-link' href='#'>
              Preferences
            </a>
          </li>
          <li>
            <a id='navBar' className='nav-item nav-link' href='myKitchen.html'>
              My Kitchen
            </a>
          </li>
          <li>
            <a
              id='navBar'
              className='nav-item nav-link active'
              href='/profile.html'
            >
              My Profile<span className='sr-only'>(current)</span>
            </a>
          </li>
          <li>
            <a id='navBar' className='nav-item nav-link' href='recipes.html'>
              Recipes
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
