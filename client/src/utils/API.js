import axios from "axios";

const config = {
  headers: {
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('token')
  }
}

export default {
  // Save recipe to my favorites
  saveFavorites: function(data) {
    axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
    return axios.post("/api/favorites/myfavorites", data);
  },
  // Delete recipe from myfavorites by recipe id
  deleteFavorites: function(id) {
    axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
    return axios.delete("/api/favorites/myfavorites/" + id);
  },

  //Retrieve user's favorites
  getUserFavorites: function(){
    axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
    return axios.get("/api/favorites/myfavorites")
  },

  createUser: function(data){
    axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
    return axios.get("/api/auth", JSON.stringify(data))
  },

  getUser: function(){
    axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
    return axios.get("/api/users")
  },

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

  getUsers: function () {
    return axios
      .get('/api/users')
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  
};