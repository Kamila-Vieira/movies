import { createContext, useContext, useState } from "react";
import { ContextProps, ProviderProps, StateProps } from "../typings/context";

const DEFAULT_PROPS: StateProps = {
  movies: [],
  searchResult: [],
  genres: [],
  searchLoading: true,
  query: "",
  page: 1,
  totalPages: 1,
  moviePageLoading: false,
  activePage: 1,
  pages: [],
  updatedPages: [1, 2, 3, 4, 5],
  limitPagination: 5,
  initial: true,
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
