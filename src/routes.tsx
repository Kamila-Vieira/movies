import { Route, Routes as BrowserRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";

function Routes() {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />}>
        <Route path="/movie/:name" element={<Movie />} />
      </Route>
    </BrowserRoutes>
  );
}

export default Routes;
