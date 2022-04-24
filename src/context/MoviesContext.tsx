import { createContext, useContext, useEffect, useState } from "react";
import { ContextProps, ProviderProps, StateProps } from "../typings/context";
import search from "../services/search";
import getGenres from "../services/genres";
import { FAKE_LOADING_TIMEOUT } from "../mocks/defaults";

const DEFAULT_PROPS: StateProps = {
  movies: [],
  searchResult: [],
  genres: [],
  searchLoading: true,
  query: "",
  page: 1,
  moviePageLoading: false,
};

const CONTEXT_PROPS: ContextProps = {
  state: DEFAULT_PROPS,
  setState: () => {},
};

const MoviesContext = createContext<ContextProps>(CONTEXT_PROPS);

const useMoviesContext = () => useContext(MoviesContext);

const MoviesContextProvider = ({ children }: ProviderProps) => {
  const [state, setState] = useState(DEFAULT_PROPS);

  useEffect(() => {
    (async () => {
      const { page } = state;
      const searchResults = await search({ initial: true, page });
      const genres = await getGenres();
      if (searchResults) {
        const { results } = searchResults;
        setTimeout(() => {
          setState({
            ...state,
            searchResult: results,
            movies: results,
            genres,
            searchLoading: false,
          });
        }, FAKE_LOADING_TIMEOUT);
      }
    })();
  }, []);

  return (
    <MoviesContext.Provider value={{ state, setState }}>
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesContextProvider, useMoviesContext };
