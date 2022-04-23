import { useState } from "react";
import { MovieItem } from "../../../typings/movies";
import { Card, CardInfo } from "../styles";
import Poster from "../../styles/Poster";
import BrokenImage from "../../Icons/BrokenImage";
import { BASE_IMAGE_SOURCE, POSTER_LIST_SIZE } from "../../../mocks/defaults";

const ListItem = ({ movie }: { movie: MovieItem }) => {
  const { poster_path, title, release_date, overview } = movie;
  const [isValidImage, setIsValidImage] = useState(true);

  return (
    <Card>
      <Poster {...POSTER_LIST_SIZE}>
        {isValidImage && poster_path ? (
          <img
            src={`${BASE_IMAGE_SOURCE}${poster_path}`}
            alt={title}
            onError={() => setIsValidImage(false)}
            className="poster"
          />
        ) : (
          <BrokenImage iconSize="70px" {...POSTER_LIST_SIZE} />
        )}
      </Poster>
      <CardInfo>
        <div className="card-top">
          <h2 className="title">{title}</h2>
        </div>
        <p className="date">{release_date}</p>
        <p className="text">{overview}</p>
      </CardInfo>
    </Card>
  );
};

export default ListItem;
