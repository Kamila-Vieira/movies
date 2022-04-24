import { lazy, Suspense, useEffect, useState } from "react";
import { MovieItem } from "../../typings/movies";
import { Card, CardInfo } from "./styles";
import Pontuation from "../../styles/Pontuation";

import { BASE_IMAGE_SOURCE, POSTER_LIST_SIZE } from "../../mocks/defaults";
import {
  formatDate,
  formatPercentage,
  formatStringToUrl,
} from "../../utils/Helpers";
import Spinner from "../../styles/Spinner";
import Genres, { Genre } from "../../styles/Genres";
import { Link } from "react-router-dom";
import { useMoviesContext } from "../../context/MoviesContext";
const Poster = lazy(() => import("../Poster"));

const ListItem = ({ movie }: { movie: MovieItem }) => {
  const [movieGenres, setMovieGenres] = useState<string[]>([]);
  const {
    state: { genres },
  } = useMoviesContext();

  const {
    poster_path,
    title,
    release_date,
    overview,
    vote_average,
    id,
    genre_ids,
  } = movie;

  useEffect(() => {
    setMovieGenres(
      genres
        .filter(({ id: genreID }) => genre_ids.includes(genreID))
        .map(({ name }) => name)
    );

    return () => {
      setMovieGenres([]);
    };
  }, [genres, genre_ids]);

  return (
    <Card as={Link} to={`/movie/${id}/${formatStringToUrl(title)}`}>
      <Suspense fallback={<Spinner />}>
        <Poster
          src={`${BASE_IMAGE_SOURCE}${poster_path}`}
          title={title}
          {...POSTER_LIST_SIZE}
        />
      </Suspense>
      <CardInfo>
        <div className="card-top">
          <h2 className="title">{title}</h2>
          <Pontuation size="74px" font="25px" className="pontuation">
            {formatPercentage(vote_average)}
          </Pontuation>
        </div>
        <p className="date">
          {release_date ? formatDate(release_date) : "Não informado"}
        </p>
        <p className="text">{overview ? overview : "Não informado"}</p>
        <Genres className="genres">
          {movieGenres.map((genre) => (
            <Genre key={genre}>{genre}</Genre>
          ))}
        </Genres>
      </CardInfo>
    </Card>
  );
};

export default ListItem;
