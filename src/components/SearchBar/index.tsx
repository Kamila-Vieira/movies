import { FormEvent } from "react";
import { Search } from "./styles";
import { useMoviesContext } from "../../context/MoviesContext";
import search from "../../services/search";
import { FAKE_LOADING_TIMEOUT } from "../../mocks/defaults";
import { normalizeString } from "../../utils/Helpers";

const SearchBar = () => {
  const { state, setState } = useMoviesContext();

  const handlerKeyUp = (event: FormEvent<HTMLInputElement>) => {
    const isValidQuery = event.currentTarget.value.replace(/[\s]/g, "").length;
    const query = event.currentTarget.value;

    setState({
      ...state,
      searchLoading: true,
      query,
    });

    setTimeout(async () => {
      const { page } = state;
      const searchResults = await search(
        isValidQuery ? { query, page } : { initial: true, page }
      );

      if (searchResults) {
        const { results } = searchResults;

        const searchResultsGenrer = await search({
          initial: true,
          page,
        });
        const genrerResultsFiltered =
          searchResultsGenrer?.results?.filter((result) => {
            const findGenre = state.genres.find(({ name }) => {
              const normalizedName = normalizeString(name);
              const normalizedQuery = normalizeString(query);
              return normalizedName.includes(normalizedQuery);
            });
            return findGenre?.id && result.genre_ids.includes(findGenre?.id);
          }) || [];

        const matchYear = query.match(/[0-9]{4}/);

        const searchResultsYear = matchYear
          ? await search({ query: "a", page, year: matchYear[0] })
          : { results: [] };
        const searchResultsYearResults = searchResultsYear?.results || [];

        const mapResults = new Set();

        const filteredResults = [
          ...results,
          ...genrerResultsFiltered,
          ...searchResultsYearResults,
        ].filter((result) => {
          const duplicatedResult = mapResults.has(result.id);
          mapResults.add(result.id);
          return !duplicatedResult;
        });

        setState({
          ...state,
          searchResult: filteredResults,
          movies: filteredResults,
          searchLoading: false,
        });
      } else {
        setState({
          ...state,
          searchResult: [],
          movies: [],
          searchLoading: false,
        });
      }
    }, FAKE_LOADING_TIMEOUT);
  };

  return (
    <Search>
      <input
        className="input"
        type="text"
        onKeyUp={handlerKeyUp}
        placeholder="Busque um filme por nome, ano ou gênero..."
      />
    </Search>
  );
};

export default SearchBar;
