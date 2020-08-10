import React, { Component } from 'react';
// import SearchBar from '../components/Layout/SearchBar';
import MyRecipeCard from './recipeCard';
import RecipeListAPI from '../../sharedComponets/sharedRecipeAPI';




class Recipes extends Component {

    state = {
        search: "",
        results: []
      };
    
        
      searchRecipes = query => {
        RecipeListAPI.search(query)
          .then(res => this.setState({ results: res.data.results }))
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };
    
      
      handleFormSubmit = event => {
        event.preventDefault();
        
        this.searchRecipes(this.state.search);
      };

      renderPage = () => {
        if (!this.state.results.length) {
          return <h3>Search for some recipes to start cooking!</h3>;
        } else {
          // return <div>Conditional render works!!!!</div>
          return this.state.results.map(recipe => {
            return (
              <div class="col-md-4" key={recipe.id}>
                <MyRecipeCard
                  id={recipe.id}
                  title={recipe.title}
                  href={recipe.sourceUrl}
                  thumbnail={recipe.image}
                />
              </div>
            );
          })
        }
        
      }
    
      render() {
        return (
          <div className="album py-5" style={{backgroundColor: "#fad09f"}}>
            <div className="container">
            
                  <SearchBar
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                  />
                <div className="row justify-content-center" id = "recipeContainer">
                  {this.renderPage()}
                </div>
            </div>
          </div>
        );
      }
    }
    

export default Recipes;