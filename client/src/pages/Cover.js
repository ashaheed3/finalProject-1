import React from 'react'
import Login from '../components/Reusables/Modal/loginModal';
import SignUp from '../components/Reusables/Modal/signUpModal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Recipes from './Recipes';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';





export default class Cover extends React.Component {
    render () {
        return (
            
            
            <div className="App">
            <div className="innercover">
                <header>
                    <h1>The Sauce Code</h1>  
                </header>
                <label>Join Sauce Code</label>
                <SignUp/>
                <label>Returning Users</label>
                <Login/>
                <div><label>Need a Recipe</label></div>
                <Button id="btnRecipe"> <Link to="/recipes">Recipe</Link></Button>
            </div>
            </div>
            
        );
    }
}
