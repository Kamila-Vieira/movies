import { FormEvent } from "react";
import { Search } from "./styles";
import { getDateYear, normalizeString } from "../../utils/Helpers";
import { useMoviesContext } from "../../context/MoviesContext";
import { FAKE_LOADING_TIMEOUT } from "../../mocks/defaults";

const SearchBar = () => {
  const { state, setState } = useMoviesContext();
  const { movies, genres } = state;

  const handlerInput = (event: FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      searchLoading: true,
    });
    const termNormalized = normalizeString(event.currentTarget.value);
    const searchResult = [...movies].filter((movie) => {
      const { title, genre_ids, release_date } = movie;
      const movieGenres = genres.filter(({ id }) => genre_ids.includes(id));
      const movieYear = getDateYear(release_date);
      const normalizedTitle = normalizeString(title);

      if (movieYear.includes(termNormalized)) return true;
      if (normalizedTitle.includes(termNormalized)) return true;
      const someGender = movieGenres.some(({ name }) => {
        const normalizedName = normalizeString(name);
        return normalizedName.includes(termNormalized);
      });

      return someGender;
    });
    setTimeout(() => {
      setState({
        ...state,
        searchResult,
        searchLoading: false,
      });
    }, FAKE_LOADING_TIMEOUT);
  };

  return (
    <Search>
      <input
        className="input"
        type="text"
        onInput={handlerInput}
        placeholder="Busque um filme por nome, ano ou gênero..."
      />
    </Search>
  );
};

export default SearchBar;
