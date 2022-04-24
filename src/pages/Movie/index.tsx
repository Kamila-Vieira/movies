import { useEffect, useState } from "react";
import { useParams } from "react-router";
import getMovie from "../../services/movie";
import videos from "../../services/videos";
import { useMoviesContext } from "../../context/MoviesContext";

import {
  formatDate,
  formatDuration,
  formatIframeSource,
  formatPercentage,
  formatPrice,
} from "../../utils/Helpers";
import {
  BASE_IMAGE_SOURCE,
  FAKE_LOADING_TIMEOUT,
  POSTER_PAGE_SIZE,
} from "../../mocks/defaults";

import Poster from "../../components/Poster";
import Iframe from "../../components/Iframe";
import { MoviePage } from "../../typings/movies";

import { Main, Top, Bottom, Infos } from "./styles";
import Container from "../../styles/Container";
import Pontuation from "../../styles/Pontuation";
import Genres, { Genre } from "../../styles/Genres";
import Spinner from "../../styles/Spinner";
import { Empty } from "../../components/MoviesList/styles";

const Movie = () => {
  const [language, setLanguage] = useState("");
  const [iframeSource, setIframeSource] = useState("");
  const [movie, setMovie] = useState<MoviePage | null>(null);
  const { state, setState } = useMoviesContext();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });

    (async () => {
      setState({
        ...state,
        moviePageLoading: true,
      });
      if (id) {
        const response = await getMovie(id);
        if (response) {
          setMovie(response);
        }
        setTimeout(() => {
          setState({
            ...state,
            moviePageLoading: false,
          });
        }, FAKE_LOADING_TIMEOUT);
      }
    })();
  }, []);

  useEffect(() => {
    if (movie?.original_language && movie?.spoken_languages) {
      const findLanguage = movie?.spoken_languages.find(
        ({ iso_639_1 }) => iso_639_1 === movie?.original_language
      );
      setLanguage(findLanguage ? findLanguage.name : movie?.original_language);
    }
  }, [movie?.original_language, movie?.spoken_languages]);

  useEffect(() => {
    if (movie?.video) {
      (async () => {
        if (id) {
          const videosResults = await videos(id);
          console.log(videosResults);
          if (videosResults?.results) {
            for (let index = 0; index < videosResults.results.length; index++) {
              const videoData = videosResults.results[index];
              const validSource = formatIframeSource(videoData);
              if (validSource) {
                setIframeSource(validSource);
                break;
              }
            }
          }
        }
      })();
    }
  }, [movie?.video, id]);

  if (state.moviePageLoading) {
    return (
      <div style={{ marginTop: "20px" }}>
        <Spinner size="50px" />
      </div>
    );
  }

  if (!movie) {
    return (
      <Empty>
        <em>Ocorreu um erro</em>
      </Empty>
    );
  }

  const {
    title,
    release_date,
    poster_path,
    overview,
    status,
    runtime,
    vote_average,
    genres,
    budget,
    revenue,
  } = movie;

  return (
    <Container fullOnResponsive>
      <Main>
        <Top>
          <h2 className="title">{title}</h2>
          <p className="date">
            {release_date ? formatDate(release_date) : "Não informado"}
          </p>
        </Top>
        <Bottom>
          <Infos>
            <h3 className="title">Sinopse</h3>
            <p className="text">{overview ? overview : "Não informado"}</p>
            <h3 className="title">Informações</h3>
            <div className="informations">
              <div className="item">
                <h4 className="item-title">Situação</h4>
                <p className="item-text">{status}</p>
              </div>
              <div className="item">
                <h4 className="item-title">Idioma</h4>
                <p className="item-text">{language}</p>
              </div>
              <div className="item">
                <h4 className="item-title">Duração</h4>
                <p className="item-text">
                  {runtime ? formatDuration(runtime) : "Não informado"}
                </p>
              </div>
              <div className="item">
                <h4 className="item-title">Orçamento</h4>
                <p className="item-text">{formatPrice(budget)}</p>
              </div>
              <div className="item">
                <h4 className="item-title">Receita</h4>
                <p className="item-text">{formatPrice(revenue)}</p>
              </div>
              <div className="item">
                <h4 className="item-title">Lucro</h4>
                <p className="item-text">{formatPrice(revenue - budget)}</p>
              </div>
            </div>
            <div className="informations bottom">
              <Genres>
                {genres.map(({ name }) => (
                  <Genre key={name}>{name}</Genre>
                ))}
              </Genres>
              <Pontuation size="117px" font="40px" className="pontuation">
                {formatPercentage(vote_average)}
              </Pontuation>
            </div>
          </Infos>
          <Poster
            src={`${BASE_IMAGE_SOURCE}${poster_path}`}
            title={title}
            {...POSTER_PAGE_SIZE}
          />
        </Bottom>
      </Main>
      {iframeSource && <Iframe title={title} iframeSource={iframeSource} />}
    </Container>
  );
};

export default Movie;
