import { Dispatch, ReactNode, SetStateAction } from "react";
import { MovieItem, Gender } from "./movies";

type ProviderProps = {
  children: ReactNode;
};

type StateProps = {
  movies: MovieItem[];
  searchResult: MovieItem[];
  genres: Gender[];
  searchLoading: boolean;
  isMobile: boolean;
};

type ContextProps = {
  state: StateProps;
  setState: Dispatch<SetStateAction<StateProps>>;
};

export { ProviderProps, ContextProps, StateProps };
