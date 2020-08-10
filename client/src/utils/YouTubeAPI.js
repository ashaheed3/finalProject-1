import axios from "axios";

const BASEURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=relevance&q=";
const APIKEY = "&key=AIzaSyCOMjWd6CEKlKs3byf7mEcSLCBez3aG3So";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    delete axios.defaults.headers.common["x-auth-token"];
    return axios.get(BASEURL + query + "&type=video" + APIKEY);
  }
};
