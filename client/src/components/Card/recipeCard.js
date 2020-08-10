import React, { Component } from 'react';
// import './favorites-style.css';
import YouTubeAPI from '../../sharedComponets/youtubeAPI';
import RecipeAPI from '../../sharedComponets/sharedRecipeAPI';
import API from '../../sharedComponets/sharedAPI';
import Ingredients from '../../sharedComponets/ingredients';
import Loading from '../../sharedComponets/loading'
import Modal from '../../sharedComponets/modal';

const liked = {
    liked: "far fa-heart like fa-2x fa",
    unliked: "far fa-heart like fa-2x"
}



class MyRecipeCard extends Component{

    state = {
        saved: false,
        ingredientResults: [],
        youtubeVideo: [],
        savedRecipes: []
      }

      componentDidMount(){
        RecipeAPI.search(this.props.id)
        .then(res => this.setState({ ingredientResults: res.data.extendedIngredients }))
        .catch(err => console.log(err));

        YouTubeAPI.search(this.props.title)
        .then(res => this.setState({ youtubeVideo: res.data.items[0] }))
        .catch(err => console.log(err));

        API.getFavorites()
        .then(res => this.setState({savedRecipes: res}))
        .catch(err => console.log(err))
      }

      toggleLike = () => {
        this.setState(state => ({ saved: !state.saved }))
        switch (this.state.saved){
        case true:
          API.saveFavorites({
            id: this.props.id,
            title: this.props.title,
            sourceUrl: this.props.href,
            videoID: this.state.youtubeVideo.id.videoId,
            image: this.state.thumbnail,
            ingredients: this.state.ingredientResults
          })
        
          break;
        case false:
          API.deleteFavorites(this.props.id)
          break;
      }
    }
      getLikeClass = () => this.state.saved ? 'liked' : 'unliked'

      

      renderIngredients = () => {
        if (!this.state.ingredientResults.length) {
          return <Loading text = "Loading Ingredients"/>
        } else {
          // return <div>Conditional render works!!!!</div>
          return  this.state.ingredientResults.map(ingredient => {
                return (
                  <Ingredients
                    name = {ingredient.name}
                    key = {ingredient.id}
                  />
                );
              })
            
          
            }
        
      }

      renderYoutubeVideo = () => {
        if (!Object.keys(this.state.youtubeVideo).length) {
          return (
            <Modal
            id="modal"
            title= "Video unavailable"
            videoId = ""
       />
          )
        } else {
            return (
                <Modal
                    id="modal"
                    title= {this.state.youtubeVideo.snippet.title}
                    videoId = {this.state.youtubeVideo.id.videoId}
               />
            );
            
            
          
            }
        
      }

      

    render(){
        const likeClass = this.getLikeClass();
        return ( 
        
                <div className="card mb-4 shadow-sm" style={{backgrounColor:  "antiquewhite"}}>
                    <img className = "recipeImg" src = {"https://spoonacular.com/recipeImages/"+ this.props.thumbnail} alt ={this.props.title} width="100%" height="225"/>
                    <h4>{this.props.title}</h4>
                    
                    <div className="card-body">
                        <div className = "card-text ingredients">
                            <h6>Ingredients</h6>
                        {this.renderIngredients()}
                        </div>
                        {/* <Loading text = "Loading ingredients"/> */}
                        <div className="d-flex justify-content-between align-items-center">
                            <button type="button" className="btn btn-md btn-outline-secondary viewRecipeBtn">
                                <a href = {this.props.href}>View Recipe</a>    
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-md btn-outline-secondary"
                                data-toggle="modal" 
                                data-target="#modal">
                                View Video
                            </button>
                            {this.renderYoutubeVideo()}
                            
                            <div>
                                <i 
                                    data-recipeid = {this.props.id} 
                                    style = {{color:"red"}} 
                                    className={liked[likeClass]} 
                                    onClick={this.toggleLike}/>
                            </div>
                        </div>
                    </div>
                </div>
        ) 
    }
} 

export default MyRecipeCard;