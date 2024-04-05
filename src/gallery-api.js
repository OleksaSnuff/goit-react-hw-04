import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "v481prbIHl5hZYk4A3jHAsoM9s02pcxVe1Cfb88LyIA";
const PARAMS = "search/photos";

const fetchQuery = async (query) => {
  if (query.length > 0) {
    const response = await axios.get(PARAMS, {
      params: {
        client_id: ACCESS_KEY,
        query: query,
        per_page: 1,
        orientation: "landscape",
      },
    });
    console.log(response.data.results);
    return response.data.results;
  }
};
export default fetchQuery;
