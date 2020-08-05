import React from 'react';
import Thumbnail from './Thumbnail';

const RecipeCard = ({ thumbnail, title, ingredients, href }) => {
  //console.log(props);
  return (
    <div className='ui centered card' style={{ backgroundColor: '#301728FF' }}>
      <div class='image'>
        <Thumbnail src={thumbnail || 'https://placehold.it/300x300'} />
      </div>
      <div className='content'>
        <div className='header' style={{ color: '#9F6B99FF' }}>
          {title}
        </div>

        <div className='description' style={{ color: '#9F6B99FF' }}>
          Ingredients: {ingredients.toString()}
        </div>
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
