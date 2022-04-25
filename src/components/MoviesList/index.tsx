import { lazy, Suspense, useEffect } from "react";
import { useMoviesContext } from "../../context/MoviesContext";
import search from "../../services/search";
import getGenres from "../../services/genres";
import Spinner from "../../styles/Spinner";
import Pagination from "../Pagination";
import { ListContainer, List, Empty } from "./styles";
import { separateArray } from "../../utils/Helpers";
import {
  FAKE_LOADING_TIMEOUT,
  SEARCH_LIMIT_PER_PAGE,
} from "../../mocks/defaults";
import usePaginate from "../../hooks/usePaginate";
const ListItem = lazy(() => import("../ListItem"));

const MovieList = () => {
  const { state, setState } = useMoviesContext();
  const paginate = usePaginate(true);
  const { pages, activePage, searchLoading, page, initial } = state;

  useEffect(() => {
    (async () => {
      if (initial && pages.length < SEARCH_LIMIT_PER_PAGE) {
        const searchResults = await search({ initial, page });
        const genres = await getGenres();
        if (searchResults) {
          const { results } = searchResults;
          const pages = separateArray(results, SEARCH_LIMIT_PER_PAGE);

          setTimeout(async () => {
            if (
              pages.length < SEARCH_LIMIT_PER_PAGE &&
              searchResults.total_pages > page
            ) {
              const newState = await paginate({
                oldSearchResult: results,
                genres,
              });
              setState({
                ...state,
                ...newState,
                initial: true,
              });
            }
          }, FAKE_LOADING_TIMEOUT);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initial]);

  return (
    <>
      {searchLoading ? (
        <Spinner size="50px" />
      ) : (
        <ListContainer>
          {pages[activePage - 1]?.length ? (
            <>
              <List>
                <Suspense fallback={<Spinner />}>
                  {pages[activePage - 1]?.map((movie) => {
                    return <ListItem key={movie.id} movie={movie} />;
                  })}
                </Suspense>
              </List>
              <Pagination />
            </>
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
