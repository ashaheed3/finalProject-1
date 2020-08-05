import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-light'
      style={{ backgroundColor: '#301728FF', padding: '16px' }}
    >
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
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav ml-auto'>
          <Link to='/' style={{ color: '#9F6B99FF' }}>
            <li>
              Profile <span className='sr-only'>(current)</span>
            </li>
          </Link>

          <Link to='/favorites' style={{ color: '#9F6B99FF' }}>
            <li>Favorites</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
