import axios from "axios";

export default {
  // Save recipe to my favorites
  saveFavorites: function(data) {
    return axios.get("/api/favorites/myfavorites", data);
  },
  // Delete recipe from myfavorites by recipe id
  deleteFavorites: function(id) {
    return axios.delete("/api/favorites/myfavorites/" + id);
  },

  //Retrieve user's favorites
  getUserFavorites: function(){
    return axios.post("/api/favories/myfavorites")
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