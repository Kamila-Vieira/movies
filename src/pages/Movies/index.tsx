import Container from "../../styles/Container";
import SearchBar from "../../components/SearchBar";
import MoviesList from "../../components/MoviesList";

const Movies = () => {
  return (
    <Container>
      <SearchBar />
      <MoviesList />
    </Container>
  );
};

export default Movies;
