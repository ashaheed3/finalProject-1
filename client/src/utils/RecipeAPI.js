import axios from 'axios';

export default {
  getRecipes: function () {
    return axios
      .get('/api/testRecipes')
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  postRecipes: function () {
    return axios
      .post('/api/favorites', {})
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
