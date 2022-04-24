import axios from "axios";
import { API_KEY, BASE_URL, LANGUAGE } from "../mocks/defaults";
import { Genre } from "../typings/movies";

const genres = async () => {
  const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE}`;
  try {
    const {
      data: { genres },
    } = await axios({
      url,
      method: "GET",
    });
    return genres as Genre[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default genres;
