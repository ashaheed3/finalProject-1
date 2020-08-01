import React from 'react';
import RecipeCard from '../components/Layout/RecipeCard';

const Favorites = () => {
  return (
    <div className='container'>
      <div className='ui link cards'>
        <RecipeCard title='Chicken Noodle Soup' />
        <RecipeCard title='Pizza' />
        <RecipeCard title='Lasagna' />
        <RecipeCard title='Lamb Chops' />
        <RecipeCard title='Fried Chicken' />
        <RecipeCard title='Macaroni and Cheese' />
      </div>
    </div>
  );
};

export default Favorites;
