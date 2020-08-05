import React from "react";
import Navbar from 'react-bootstrap/Navbar';


export default class NavBar extends React.Component {
    render () {
        return (<header>
           <Navbar bg="light" expand="lg">

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <NavBar className="mr-auto">
       <NavBar className="justify-content-end" variant="pills"  activeKey="/home">
      <NavBar.Link href="/home">Home</NavBar.Link>
      <NavBar.Link href="/Preferences">Preferences</NavBar.Link>
      <NavBar.Link href="/myKitchen.html">My Kitchen</NavBar.Link>
      <NavBar.Link href="/profile.html">My Profile</NavBar.Link>
      <NavBar.Link href="/Recipes">Recipes</NavBar.Link>
      <NavBar.Link> </NavBar.Link>
     </NavBar>
    </NavBar>
  </Navbar.Collapse>
</Navbar>
        </header>)
    }

}

