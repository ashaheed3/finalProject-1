import React, { Component } from 'react';



var kitchenIngredients = [];
var muteText = "";
var storedFavorites = JSON.parse(localStorage.getItem("favorites"));
var favorites = [];

if (storedFavorites !== null) {
   favorites = storedFavorites;
}

//Get kitchen items from local storage
function getKitchenItems(){
    var dairy =  JSON.parse(localStorage.getItem("dairyAlt"));
    var produce =  JSON.parse(localStorage.getItem("produceAlt"));
    var meat =  JSON.parse(localStorage.getItem("meatAlt"));
    var seafood =  JSON.parse(localStorage.getItem("seafoodAlt"));
    var pantry =  JSON.parse(localStorage.getItem("pantryAlt"));


    if ((dairy == null)||(produce == null)||(meat == null)||(seafood == null)||(pantry == null)){
        return;
    }else{
       dairy.push(...produce, ...meat, ...seafood,...pantry);
    }
          
        dairy.forEach(element => {
            kitchenIngredients.push(element[1]);
          });
    }

class Ingredients extends Component{

    componentDidMount(){
        getKitchenItems();
        if ((-1 == kitchenIngredients.indexOf(`${this.props.key}`))){
            muteText = "text-muted";
         } 
      }

    
        
    

    render(){
        return (
            
                    <div 
                        key={this.props.key}    
                        data-id={this.props.key} class={muteText}>{this.props.name}
                    </div>
               
    )
        }
    }
export default Ingredients;