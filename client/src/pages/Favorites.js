import React from 'react';

const Favorites = () => {
  return (
    <div className='container'>
      <div className='ui link cards'>
        <div className='card'>
          <div class='image'>
            <img src='/images/foodFive.jpg'></img>
          </div>
          <div className='content'>
            <div className='header'>Recipe Title</div>

            <div className='description'>Recipe Ingredients</div>
          </div>
          <div className='extra content'>
            <span className='right floated'>View Video</span>
            <span>View Recipe</span>
          </div>
        </div>
        <div className='card'>
          <div class='image'>
            <img src='/images/foodFive.jpg'></img>
          </div>
          <div className='content'>
            <div className='header'>Recipe Title</div>

            <div className='description'>Recipe Ingredients</div>
          </div>
          <div className='extra content'>
            <span className='right floated'>View Video</span>
            <span>View Recipe</span>
          </div>
        </div>
        <div className='card'>
          <div class='image'>
            <img src='/images/foodFive.jpg'></img>
          </div>
          <div className='content'>
            <div className='header'>Recipe Title</div>

            <div className='description'>Recipe Ingredients</div>
          </div>
          <div className='extra content'>
            <span className='right floated'>View Video</span>
            <span>View Recipe</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
