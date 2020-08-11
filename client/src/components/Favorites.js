import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import API from '../utils/API';

function Favorites() {
  const [faves, setFaves] = useState([]);

  const getFaves = async () => {
    const res = await API.getUserFavorites();
    console.log(res);
    setFaves(res.data);
  };

  useEffect(() => {
    getFaves();
  }, []);

  const renderedFaves = (faves) => {
    if (!faves.length) {
      return (
        <h2 className='text-center'>
          You haven't saved any recipes.<i class='frown outline icon'></i>
        </h2>
      );
    }

    /*let ingredientsArray = [];
    let ingredients = faves[0].ingredients;
    ingredients.forEach((ingredient) => {
      ingredientsArray.push(ingredient.name);
    });*/

    return faves.map((fave) => (
      <RecipeCard
        key={fave.title}
        title={fave.title}
        sourceUrl={fave.sourceUrl}
        videoID={fave.videoID}
        ingredients={fave.ingredients}
        image={fave.image}
      />
    ));
  };

  return (
    <div
      className='container'
      style={{
        maxWidth: '1100px',
        marginTop: '20px',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#844685' }}>
        My Favorite Recipes
      </h2>
      <div class='ui link cards'>{renderedFaves(faves)}</div>
    </div>
  );
}

export default Favorites;
