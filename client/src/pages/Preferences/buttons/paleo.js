import React from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const APIkey = "`https://api.spoonacular.com/recipes/${foodId}/information?includeNutrition=false&apiKey=496787d7b33d43a48e3924e2e30430f9`"

export default class PaleoButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: ' ',
            isLoading: false
        }
    
        
         this.getPaleo= this.getPaleo.bind(this);
    }

    getPaleo = async () => {

        const response = await axios.get("https://api.spoonacular.com/recipes/search?q=chicken&diet=Paleo&number=9&apiKey=496787d7b33d43a48e3924e2e30430f9", {})
        .then((response) => {
            this.props.setRecipes(response.data.results)
             console.log(response.data.results)
         });
       
      this.setState({isLoading: true})
      
      }
render(){
return(
    <div>
         <Button  onClick={this.getPaleo} variant="primary"  size="lg" active>
Paleo 
</Button>{' '}
    </div>
)
}
}