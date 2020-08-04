import axios from 'axios';

export default {
  getFavorites: function () {
    return axios
      .get('/api/favorites')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
