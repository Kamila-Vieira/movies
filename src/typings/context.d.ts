import { Dispatch, ReactNode, SetStateAction } from "react";
import { MovieItem } from "./movies";

type ProviderProps = {
  children: ReactNode;
};

type StateProps = {
  movies: MovieItem[];
  searchResult: MovieItem[][];
};

type ContextProps = {
  state: StateProps;
  setState: Dispatch<SetStateAction<StateProps>>;
};

export { ProviderProps, ContextProps, StateProps };
