import { lazy, Suspense } from "react";
import { Link, Route, Routes as BrowserRoutes } from "react-router-dom";
import Header from "./styles/Header";
import Spinner from "./styles/Spinner";

const Movies = lazy(() => import("./pages/Movies"));
const Movie = lazy(() => import("./pages/Movie"));

function Routes() {
  return (
    <Suspense fallback={<Spinner />}>
      <Header>
        <Link to="/">
          <h1 className="title">Movies</h1>
        </Link>
      </Header>
      <BrowserRoutes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id/:title" element={<Movie />} />
      </BrowserRoutes>
    </Suspense>
  );
}

export default Routes;
