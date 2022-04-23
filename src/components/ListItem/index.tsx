import { lazy, Suspense } from "react";
import { MovieItem } from "../../typings/movies";
import { Card, CardInfo } from "./styles";
import Pontuation from "../styles/Pontuation";

import { BASE_IMAGE_SOURCE, POSTER_LIST_SIZE } from "../../mocks/defaults";
import { formatDate, formatePercentage } from "../../utils/Helpers";
import Spinner from "../styles/Spinner";
import { useMoviesContext } from "../../context/MoviesContext";
const Poster = lazy(() => import("../Poster"));

const ListItem = ({ movie }: { movie: MovieItem }) => {
  const {
    state: { isMobile },
  } = useMoviesContext();
  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    overview,
    popularity,
  } = movie;

  return (
    <Card>
      <Suspense fallback={<Spinner />}>
        <Poster
          src={
            isMobile
              ? `${BASE_IMAGE_SOURCE}${backdrop_path}`
              : `${BASE_IMAGE_SOURCE}${poster_path}`
          }
          title={title}
          {...POSTER_LIST_SIZE}
        />
      </Suspense>
      <CardInfo>
        <div className="card-top">
          <h2 className="title">{title}</h2>
          <Pontuation size="74px" className="pontuation">
            {formatePercentage(popularity)}
          </Pontuation>
        </div>
        <p className="date">{formatDate(release_date)}</p>
        <p className="text">{overview}</p>
      </CardInfo>
    </Card>
  );
};

export default ListItem;
