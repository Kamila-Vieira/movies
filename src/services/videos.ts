import axios from "axios";
import { API_KEY, BASE_URL, LANGUAGE } from "../mocks/defaults";
import { Videos } from "../typings/movies";

const videos = async (movieId: string) => {
  const url = `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=${LANGUAGE}`;
  try {
    const { data } = await axios({
      url,
      method: "GET",
    });
    return data as Videos;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default videos;
