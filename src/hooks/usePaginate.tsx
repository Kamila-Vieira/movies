import search from "../services/search";
import { SEARCH_LIMIT_PER_PAGE } from "../mocks/defaults";
import { separateArray, sequentialArray } from "../utils/Helpers";
import { useMoviesContext } from "../context/MoviesContext";
import { Genre, MovieItem } from "../typings/movies";

type Paginate = {
  activePage?: number;
  oldSearchResult?: MovieItem[];
  genres?: Genre[];
};

const usePaginate = (updatePages: boolean) => {
  const { setState, state } = useMoviesContext();
  const { page, initial, query, searchResult } = state;

  return async ({
    activePage = state.activePage,
    oldSearchResult = searchResult,
    genres,
  }: Paginate) => {
    if (initial) {
    }
    const newResults = await search(
      initial
        ? {
            initial,
            page: page + 1,
          }
        : {
            query,
            page: page + 1,
          }
    );
    const newPages = separateArray(
      [...oldSearchResult, ...(newResults?.results || [])],
      SEARCH_LIMIT_PER_PAGE
    );
    const newSearchResults = [
      ...oldSearchResult,
      ...(newResults?.results || []),
    ];
    const newMoviesResults = [
      ...oldSearchResult,
      ...(newResults?.results || []),
    ];

    const newState = {
      activePage,
      searchResult: newSearchResults,
      movies: newMoviesResults,
      pages: newPages,
      searchLoading: false,
      totalPages: newResults?.total_pages || state.totalPages,
      page: page + 1,
      limitPagination: newPages.length,
      updatedPages: updatePages
        ? sequentialArray(newPages.length > 5 ? 5 : newPages.length)
        : state.updatedPages,
      genres: genres ? genres : state.genres,
    };

    setState({
      ...state,
      ...newState,
    });

    return newState;
  };
};

export default usePaginate;
