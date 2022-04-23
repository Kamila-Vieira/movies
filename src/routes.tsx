import { lazy, Suspense } from "react";
import { Route, Routes as BrowserRoutes } from "react-router-dom";
import Spinner from "./components/styles/Spinner";

const Home = lazy(() => import("./pages/Home"));
const Movie = lazy(() => import("./pages/Movie"));

function Routes() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRoutes>
        <Route path="/" element={<Home />}>
          <Route path="/movie/:name" element={<Movie />} />
        </Route>
      </BrowserRoutes>
    </Suspense>
  );
}

export default Routes;
