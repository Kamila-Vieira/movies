import axios from "axios";
import { API_KEY, BASE_URL, LANGUAGE } from "../mocks/defaults";
import { MoviePage } from "../typings/movies";

const movie = async (id: string) => {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${LANGUAGE}`;
  try {
    const { data } = await axios({
      url,
      method: "GET",
    });
    return data as MoviePage;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default movie;
