import { lazy, Suspense } from "react";
import { useMoviesContext } from "../../context/MoviesContext";
import Spinner from "../../styles/Spinner";
import { ListContainer, List, Empty } from "./styles";
const ListItem = lazy(() => import("../ListItem"));

const MovieList = () => {
  const {
    state: { searchResult, searchLoading },
  } = useMoviesContext();

  return (
    <>
      {searchLoading ? (
        <Spinner size="50px" />
      ) : (
        <ListContainer>
          {searchResult.length ? (
            <List>
              <Suspense fallback={<Spinner />}>
                {searchResult.map((movie) => {
                  return <ListItem key={movie.id} movie={movie} />;
                })}
              </Suspense>
            </List>
          ) : (
            <Empty>
              <em>Sem resultados</em>
            </Empty>
          )}
        </ListContainer>
      )}
    </>
  );
};

export default MovieList;
