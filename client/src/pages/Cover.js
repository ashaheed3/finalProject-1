import React from 'react'
import Login from '../components/Reusables/Modal/loginModal';
import SignUp from '../components/Reusables/Modal/signUpModal';
import Button from 'react-bootstrap/Button';





export default class Cover extends React.Component {
    render () {
        return (
            <div className="innercover">
                <header>
                    <h1>The Sauce Code</h1>  
                </header>
                <label>Join Sauce Code</label>
                <SignUp/>
                <label>Returing Users</label>
                <Login/>
                <div><label>Need a Recipe</label></div>
                <Button id="btnRecipe" href='./recipes'>Recipes</Button>
            </div>
           
            
        );
    }
}
