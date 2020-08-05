import React from 'react';
import Thumbnail from './Thumbnail';

const RecipeCard = ({ thumbnail, title, ingredients, href }) => {
  //console.log(props);
  return (
    <div className='ui centered card'>
      <div class='image'>
        <Thumbnail src={thumbnail || 'https://placehold.it/300x300'} />
      </div>
      <div className='content'>
        <div className='header'>{title}</div>

        <div className='description'>Ingredients: {ingredients.toString()}</div>
      </div>
      <div className='extra content'>
        <span className='right floated'>View Video</span>
        <span>
          <a rel='noreferrer noopener' target='_blank' href={href}>
            View Recipe
          </a>
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
