import React from "./react";
import signUpModal from "./modal/signUp";
import loginModal from "./modal/login";




export default class Header extends React.Component {
    render () {
        return (
       <div className="App">
      <header>
        <h1>The Sauce Code</h1>
            <p class="lead" id="runner">You Got the Sauce Now</p>    
      </header>
      <signUpModal/>
      </div>
      

      )
    }
}