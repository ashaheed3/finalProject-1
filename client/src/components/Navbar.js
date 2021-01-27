import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth'

const Navbar = ({ auth: {isAuthenticated, loading}, logout}) => {
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
          <Link to='/' className='nav-item nav-link'>
            <li>Home</li>
          </Link>
          <Link to='/profilepage' className='nav-item nav-link'>
            <li>My Profile</li>
          </Link>

          {/* <Link to='/preferences' className='nav-item nav-link'>
            <li>Preferences</li>
          </Link> */}

          <Link to='/recipes' className='nav-item nav-link'>
            <li>Recipes</li>
          </Link>
          <Link to='/' className='nav-item nav-link'>
            <li>
              <a onClick={logout} href='#!'>Logout</a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);
