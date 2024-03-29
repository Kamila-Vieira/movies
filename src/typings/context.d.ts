import { Dispatch, ReactNode, SetStateAction } from "react";
import { MovieItem, Genre } from "./movies";

type ProviderProps = {
  children: ReactNode;
};

type StateProps = {
  movies: MovieItem[];
  searchResult: MovieItem[];
  genres: Genre[];
  searchLoading: boolean;
  query: string;
  page: number;
  totalPages: number;
  moviePageLoading: boolean;
  activePage: number;
  pages: MovieItem[][];
  updatedPages: number[];
  limitPagination: number;
  initial: boolean;
};

type ContextProps = {
  state: StateProps;
  setState: Dispatch<SetStateAction<StateProps>>;
};

export { ProviderProps, ContextProps, StateProps };
