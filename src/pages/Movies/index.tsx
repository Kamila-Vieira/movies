import MoviesList from "../../components/MoviesList";
import SearchBar from "../../components/SearchBar";
import Container from "../../styles/Container";

const Movies = () => {
  return (
    <Container>
      <SearchBar />
      <MoviesList />
    </Container>
  );
};

export default Movies;
