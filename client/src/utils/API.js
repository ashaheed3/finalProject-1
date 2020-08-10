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
    return axios.post("/api/favorites/myfavorites", JSON.stringify(data), config);
  },
  // Delete recipe from myfavorites by recipe id
  deleteFavorites: function(id) {
    return axios.delete("/api/favorites/myfavorites/" + id, config);
  },

  //Retrieve user's favorites
  getUserFavorites: function(){
    return axios.get("/api/favorites/myfavorites", config)
  },

  createUser: function(data){
    return axios.get("/api/auth", JSON.stringify(data), config)
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