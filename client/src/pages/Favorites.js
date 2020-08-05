import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import RecipeCard from '../components/Layout/RecipeCard';
import API from '../utils/API';

function Favorites() {
  const [faves, setFaves] = useState([]);

  /*const getFaves = () => {
    API.getFavorites()
      .then((res) => setFaves(res.data))
      .catch((err) => console.log(err));
  };*/
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
        backgroundColor: 'grey',
      }}
    >
      <div class='ui link cards'>{renderedFaves(faves)}</div>
    </div>
  );
}

/*useEffect(() => {
  const getFaves = async () => {
    try {
      await axios.get('/api/favorites').then((response) => {
        console.log(response);
        //return response;
        setFaves(response.data);
      });
    } catch (error) {
      console.log(error);
    }

    await getFaves();
  };
}, [faves]);*/

/*return (
    <div className='container'>
      {!faves.length ? (
        <h1 className='text-center'>You haven't saved any recipes</h1>
      ) : (
        <div>
          {renderedFaves}
        </div>
      )}
    </div>
  );*/

/*class Favorites extends React.Component {
  //state = { title: '', thumbnail: '', href: '', ingredients: [] };
  state = { faves: [] };

  componentDidMount = () => {
    this.getFaves();
  };

  getFaves = () => {
    axios
      .get('http://localhost:3000/api/favorites')
      .then((response) => {
        this.setState({ faves: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='container'>
        <div className='ui link cards'>
          <RecipeCard title='Pizza' />
        </div>
      </div>
    );
  }
}*/

/*const Favorites = () => {
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
};*/

/*render() {
  return (
    <div className='container'>
      <div className='ui link cards'>
        {this.state.map((favorite) => {
          return (
            <RecipeCard
              key={favorite.title}
              title={favorite.title}
              href={favorite.href}
              ingredients={favorite.ingredients}
              thumbnail={favorite.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
}*/

export default Favorites;
