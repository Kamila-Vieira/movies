import axios from "axios";
import { API_KEY, BASE_URL, LANGUAGE } from "../mocks/defaults";
import { Movies } from "../typings/movies";

type Props = {
  initial?: boolean;
  query?: string;
  year?: string;
  page?: number;
};

const search = async ({ initial = false, query, page = 1, year }: Props) => {
  if (initial) {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&page=${page}`;

    try {
      const { data } = await axios({
        url,
        method: "GET",
      });
      return data as Movies;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${LANGUAGE}&query=${query}&page=${page}${
    year ? `&primary_release_year=${year}` : ``
  }`;

  try {
    const { data } = await axios({
      url,
      method: "GET",
    });
    return data as Movies;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default search;
