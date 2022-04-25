import { FormEvent, useState } from "react";
import { Search } from "./styles";
import { useMoviesContext } from "../../context/MoviesContext";
import search from "../../services/search";
import {
  FAKE_LOADING_TIMEOUT,
  SEARCH_LIMIT_PER_PAGE,
} from "../../mocks/defaults";
import {
  normalizeString,
  separateArray,
  sequentialArray,
} from "../../utils/Helpers";
import usePaginate from "../../hooks/usePaginate";

const SearchBar = () => {
  const { state, setState } = useMoviesContext();
  const paginate = usePaginate(true);
  const [term, setTerm] = useState(state.query);

  const handlerChange = (event: FormEvent<HTMLInputElement>) => {
    const isValidQuery = event.currentTarget.value.replace(/[\s]/g, "").length;
    const query = event.currentTarget.value;
    setTerm(query);

    setState({
      ...state,
      searchLoading: true,
      query,
      page: 1,
      initial: !isValidQuery,
      totalPages: 1,
      activePage: 1,
      pages: [],
      updatedPages: [1, 2, 3, 4, 5],
      limitPagination: 5,
    });

    setTimeout(async () => {
      const searchResults = await search(
        isValidQuery > 0 ? { query, page: 1 } : { initial: true, page: 1 }
      );

      const searchResultsGenrer = await search({
        initial: true,
        page: 1,
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
        ? await search({ query: "a", page: 1, year: matchYear[0] })
        : { results: [], total_pages: 0 };
      const searchResultsYearResults = searchResultsYear?.results || [];

      const mapResults = new Set();

      const filteredResults = [
        ...(searchResults?.results || []),
        ...genrerResultsFiltered,
        ...searchResultsYearResults,
      ].filter((result) => {
        const duplicatedResult = mapResults.has(result.id);
        mapResults.add(result.id);
        return !duplicatedResult;
      });

      const pages = separateArray(filteredResults, SEARCH_LIMIT_PER_PAGE);

      if (
        pages.length < SEARCH_LIMIT_PER_PAGE &&
        (searchResults?.total_pages || state.totalPages) > state.activePage
      ) {
        const newState = await paginate({
          oldSearchResult: filteredResults,
        });
        setState({
          ...state,
          ...newState,
          initial: false,
        });
      } else {
        setState({
          ...state,
          searchResult: filteredResults,
          movies: filteredResults,
          pages,
          updatedPages: sequentialArray(pages.length > 5 ? 5 : pages.length),
          searchLoading: false,
          totalPages:
            (searchResults?.total_pages || 0) +
            (searchResultsGenrer?.total_pages || 0) +
            (searchResultsYear?.total_pages || 0),
          initial: false,
        });
      }
    }, FAKE_LOADING_TIMEOUT);
  };

  return (
    <Search>
      <input
        className="input"
        type="text"
        onChange={handlerChange}
        value={term}
        placeholder="Busque um filme por nome, ano ou gênero..."
      />
    </Search>
  );
};

export default SearchBar;
