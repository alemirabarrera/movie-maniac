// eslint-disable-next-line no-unused-vars
import React from "react";
import MovieList from "./components/MovieList/MovieList";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./components/movieDetail/MovieDetail";

export default function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/popular"
        element={<MovieList type="popular" title="Popular" emoji={Fire} />}
      />
      <Route
        path="/top_rated"
        element={<MovieList type="top_rated" title="Top Rated" emoji={Star} />}
      />
      <Route
        path="/upcoming"
        element={<MovieList type="upcoming" title="Upcoming" emoji={Party} />}
      />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
}
