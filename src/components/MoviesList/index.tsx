import { useMoviesContext } from "../../context/MoviesContext";
import { ListContainer, List } from "./styles";
import ListItem from "./ListItem";

const MovieList = () => {
  const {
    state: { movies },
  } = useMoviesContext();
  return (
    <ListContainer>
      <List>
        {movies.map((movie) => {
          return <ListItem key={movie.id} movie={movie} />;
        })}
      </List>
    </ListContainer>
  );
};

export default MovieList;
