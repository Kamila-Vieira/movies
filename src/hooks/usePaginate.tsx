import search from "../services/search";
import { SEARCH_LIMIT_PER_PAGE } from "../mocks/defaults";
import {
  normalizeString,
  separateArray,
  sequentialArray,
} from "../utils/Helpers";
import { useMoviesContext } from "../context/MoviesContext";
import { Genre, MovieItem } from "../typings/movies";
import { useEffect, useState } from "react";

type Paginate = {
  activePage?: number;
  oldSearchResult?: MovieItem[];
  genres?: Genre[];
};

const usePaginate = (updatePages: boolean) => {
  const [newResults, setNewResults] = useState<MovieItem[]>([]);
  const { setState, state } = useMoviesContext();
  const [totalPages, setTotalPages] = useState<number>(state.totalPages);
  const { page, initial, query, searchResult } = state;

  useEffect(() => {
    (async () => {
      if (initial) {
        const request = await search({
          initial,
          page: page + 1,
        });
        setNewResults(request?.results || []);
        setTotalPages(request?.total_pages || 0);
      } else {
        const isValidQuery = query.replace(/[\s]/g, "").length;
        const searchResults = await search(
          isValidQuery > 0 ? { query, page } : { initial: true, page }
        );

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
        setNewResults(filteredResults);
        setTotalPages(
          (searchResults?.total_pages || 0) +
            (searchResultsGenrer?.total_pages || 0) +
            (searchResultsYear?.total_pages || 0)
        );
      }
    })();

    return () => {
      setNewResults([]);
    };
  }, [initial]);

  return async ({
    activePage = state.activePage,
    oldSearchResult = searchResult,
    genres,
  }: Paginate) => {
    const newPages = separateArray(
      [...oldSearchResult, ...newResults],
      SEARCH_LIMIT_PER_PAGE
    );
    const newSearchResults = [...oldSearchResult, ...newResults];

    const newState = {
      activePage,
      searchResult: newSearchResults,
      movies: newSearchResults,
      pages: newPages,
      searchLoading: false,
      totalPages,
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
