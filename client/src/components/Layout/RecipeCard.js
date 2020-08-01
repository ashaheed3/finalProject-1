import React from 'react';

const RecipeCard = (props) => {
  console.log(props);
  return (
    <div className='card'>
      <div class='image'>
        <img alt='food image' src='/images/foodFive.jpg'></img>
      </div>
      <div className='content'>
        <div className='header'>{props.title}</div>

        <div className='description'>Recipe Ingredients</div>
      </div>
      <div className='extra content'>
        <span className='right floated'>View Video</span>
        <span>View Recipe</span>
      </div>
    </div>
  );
};

export default RecipeCard;
