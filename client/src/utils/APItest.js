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
  //this is to test route without auth token
  getUsers: function () {
    return axios
      .get('/api/user/test')
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
