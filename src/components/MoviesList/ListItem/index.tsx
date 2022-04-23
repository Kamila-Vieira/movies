import { MovieItem } from "../../../typings/movies";
import { Card, Poster } from "../styles";
import BrokenImage from "../../Icons/BrokenImage";

const ListItem = ({ movie }: { movie: MovieItem }) => {
  const { title, poster_path } = movie;

  return (
    <Card>
      <Poster>
        {poster_path ? <img src={poster_path} alt={title} /> : <BrokenImage />}
      </Poster>
      <h2>{title}</h2>
    </Card>
  );
};

export default ListItem;
