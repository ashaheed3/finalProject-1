import React from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const APIkey = "`https://api.spoonacular.com/recipes/${foodId}/information?includeNutrition=false&apiKey=496787d7b33d43a48e3924e2e30430f9`"


export default class Whole30Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: ' ',
            isLoading: false
        }
    
        
         this.getWhole30= this.getWhole30.bind(this);
    }


    getWhole30 = async () => {
        delete axios.defaults.headers.common["x-auth-token"];
        const response = await axios.get("https://api.spoonacular.com/recipes/search?q=chicken&diet=whole-30&number=9&apiKey=496787d7b33d43a48e3924e2e30430f9", {})
        .then((response) => {
            this.props.setRecipes(response.data.results)
             console.log(response.data.results)
         });
       
      this.setState({isLoading: true})
      
      }
render(){
return(
    <div>
         <Button  onClick={this.getWhole30} variant="primary"  size="lg" active>
Whole 30
</Button>{' '}
    </div>
)
}
}