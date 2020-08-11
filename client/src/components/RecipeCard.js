import React from 'react';
import Thumbnail from './Thumbnail';

const RecipeCard = ({ image, title, ingredients, sourceUrl, videoID }) => {
  //console.log(props);
  return (
    <div className='ui centered card' style={{ backgroundColor: '#844685' }}>
      <div class='image'>
        <Thumbnail src={image || 'https://placehold.it/300x300'} />
      </div>
      <div className='content'>
        <div className='header' style={{ color: 'white' }}>
          {title}
        </div>

        <div className='description' style={{ color: 'white' }}>
          Ingredients:
          {ingredients.map((ingredient) => {
            return (
              <ul>
                <li>{ingredient.name}</li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className='extra content'>
        <span className='right floated'>
          <a rel='noreferrer noopener' target='_blank' href={videoID}>
            View Video
          </a>
        </span>
        <span>
          <a rel='noreferrer noopener' target='_blank' href={sourceUrl}>
            View Recipe
          </a>
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
