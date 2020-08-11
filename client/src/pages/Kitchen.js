import React from 'react';
import NavBar from '../components/Navbar';
import myKitchen from '../components/myKitchen';
import '../components/styleSheet.css';

class Kitchen extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <myKitchen />
      </div>
    );
  }
}
export default Kitchen;
