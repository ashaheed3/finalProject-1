import axios from 'axios';

const BASEURL = 'https://api.spoonacular.com/recipes/search?query=';
const APIKEY = '&apiKey=08f60c4364f74e17b4143c40fa0cff70';

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
};
