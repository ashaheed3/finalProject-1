import React from "react";



export default class TheRecipe extends React.Component {
    render () {
        function ActionLink() {
            function handleClick(e) {
              e.preventDefault();
              console.log('The link was clicked.');
            }
            
        return (
            <a  onClick={this.handleClick} variant="link"
            href="./recipe.js">Recipes</a> 
        );
    }   
  }
}