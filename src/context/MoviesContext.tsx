import { createContext, useContext, useState } from "react";
import { ContextProps, ProviderProps, StateProps } from "../typings/context";
import movies from "../mocks/movies.json";
import genres from "../mocks/genres.json";
import { stat } from "fs";

const DEFAULT_PROPS: StateProps = {
  movies: movies.results,
  searchResult: movies.results,
  genres: genres.genres,
  searchLoading: false,
  isMobile: window.innerWidth <= 638,
};

const CONTEXT_PROPS: ContextProps = {
  state: DEFAULT_PROPS,
  setState: () => {},
};

const MoviesContext = createContext<ContextProps>(CONTEXT_PROPS);

const useMoviesContext = () => useContext(MoviesContext);

const MoviesContextProvider = ({ children }: ProviderProps) => {
  const [state, setState] = useState(DEFAULT_PROPS);

  window.onresize = () =>
    setState({ ...state, isMobile: window.innerWidth <= 638 });

  return (
    <MoviesContext.Provider value={{ state, setState }}>
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesContextProvider, useMoviesContext };
