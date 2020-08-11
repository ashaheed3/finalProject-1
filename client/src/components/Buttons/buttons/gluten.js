import React from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from '../../Card/recipeCard';
import API from '../../../sharedComponets/sharedAPI'



const styleMe ={
    backgroundColor: "#844685",
    fontSize: "24px",
    color: 'white',
}

export default class GlutenButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ' ',
            isLoading: false
        }
        this.getGluten = this.getGluten.bind(this);
    }

    getGluten = async () => {
        delete axios.defaults.headers.common["x-auth-token"];
        const response = await axios.get("https://api.spoonacular.com/recipes/search?q=chicken&diet=keto&number=9&apiKey=496787d7b33d43a48e3924e2e30430f9", {})
            .then((response) => {
                console.log(response.data.results)
                this.props.setRecipes(response.data.results)
            });

        this.setState({ isLoading: true })
    }


    render() {
        return (
            <div type="button"
                className="glutenCards"
                data-add-button=""
                href="Card"
                onClick={this.Card}>

                <Button onClick={this.getGluten} variant="primary" size="lg" active style={styleMe}> 
                    Gluten
  </Button>{' '}
            </div>
        )

    }
    // class GlutenRecipes extends React.Component {
    //     constructor(props) {
    //       super(props);


    //       this.state = {
    //         inputLinkClicked: false
    //       }
    //     }
    //     handleAddSecondInput() {
    //         this.setState({
    //           inputLinkClicked: true
    //         })
    //       }
    //       render() {
    //         return(
    //             if (!this.state.results.length) {
    //                 return <h3>Click on a button to view recipes</h3>;
    //               } else {
    //               //   Renders cards if there are recipe results 
    //                 return this.state.results.map(recipe => {
    //                   return (
    //                     <div class="col-md-4" key={recipe.id}>
    //                       <MyRecipeCard
    //                         id={recipe.id}
    //                         title={recipe.title}
    //                         href={recipe.sourceUrl}
    //                         thumbnail={recipe.image}
    //                       />
    //                     </div>
    //                   );
    //                 })
    //               }
    //             }
    //             render() {
    //               return (
    //                 <div className="album py-5" style={{backgroundColor: "#fad09f"}}>
    //                   <div className="container">
    //                         <Button
    //                           handleOnClick={this.handleOnClick}
    //                         >Gluten
    //                         </Button>
    //                       <div className="row justify-content-center" id = "recipeContainer">
    //                         {this.renderPage()}
    //                       </div>
    //                   </div>
    //                 </div>
    //               );
    //             }
    //           }
    //       export default Recipes;

}