import axios from 'axios';

export default {
  getFavorites: function () {
    return axios
      .get('/api/favorites')
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  postFavorites: function () {
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

  getUser: function (query) {
    return axios
      .get('/api/user', { params: { q: query } })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
