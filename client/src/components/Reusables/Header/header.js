import React from "react";
import SignUp from "../Modal/signUpModal"
import loginModal from "../Modal/loginModal";




export default class Header extends React.Component {
    render () {
        return (
       <div className="App">
      <header>
        <h1>The Sauce Code</h1>
            <p class="lead" id="runner">You Got the Sauce Now</p>    
      </header>
      <SignUp/>
      </div>
      

      )
    }
}