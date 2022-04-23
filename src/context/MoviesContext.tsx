import { createContext, useContext, useState } from "react";
import { ContextProps, ProviderProps, StateProps } from "../typings/context";
import movies from "../mocks/movies.json";

const DEFAULT_PROPS: StateProps = {
  movies: movies.results,
  searchResult: [],
};

const CONTEXT_PROPS: ContextProps = {
  state: DEFAULT_PROPS,
  setState: () => {},
};

const MoviesContext = createContext<ContextProps>(CONTEXT_PROPS);

const useMoviesContext = () => useContext(MoviesContext);

const MoviesContextProvider = ({ children }: ProviderProps) => {
  const [state, setState] = useState(DEFAULT_PROPS);

  return (
    <MoviesContext.Provider value={{ state, setState }}>
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesContextProvider, useMoviesContext };
