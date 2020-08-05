import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import API from '../utils/API';

function Favorites() {
  const [faves, setFaves] = useState([]);

  const getFaves = async () => {
    const res = await API.getFavorites();
    console.log(res);
    setFaves(res);
  };

  useEffect(() => {
    getFaves();
  }, []);

  const renderedFaves = (faves) => {
    if (!faves.length) {
      return <h1 className='text-center'>You haven't saved any recipes</h1>;
    }

    return faves.map((fave) => (
      <RecipeCard
        key={fave.title}
        title={fave.title}
        href={fave.href}
        ingredients={fave.ingredients}
        thumbnail={fave.thumbnail}
      />
    ));
  };

  return (
    <div
      className='container'
      style={{
        maxWidth: '1000px',
        backgroundColor: '#9F6B99FF',
      }}
    >
      <div class='ui link cards'>{renderedFaves(faves)}</div>
    </div>
  );
}

export default Favorites;
