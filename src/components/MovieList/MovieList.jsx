/* eslint-disable */

import React, { useEffect, useState } from "react";
import lodash from "lodash";

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ type, title, emoji }) => {
  const [movies, setmovies] = useState([]);
  const [filterMovies, setfilterMovies] = useState([]);
  const [minRating, setminRating] = useState(0);
  const [sort, setsort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    ApiCallMovies();
  }, []);

  useEffect(() => {
    if (sort.by !== "dafult") {
      const sortedMovies = lodash.orderBy(
        filterMovies,
        [sort.by],
        [sort.order]
      );
      setfilterMovies(sortedMovies);
    }
  }, [sort]);

  const ApiCallMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzExZDgwNmRiYzg0YjYwMWE0MzU1NTI1ZDQ2MTY1YiIsInN1YiI6IjY2NjUwMTM0ZjcxM2ZlODE1YzZkZjA4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JUbJxSxUN1JohW54sDNrQNayfKt-gBTEJUE25XIxYL0",
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}`,
      options
    );
    const data = await response.json();
    console.log(data);
    setmovies(data.results);
    setfilterMovies(data.results);
  };

  const handleFilter = (rate) => {
    if (rate == minRating) {
      setminRating(0);
      setfilterMovies(movies);
    } else {
      setminRating(rate);
      const filteredMovies = movies.filter(
        (movie) => movie.vote_average >= rate
      );
      setfilterMovies(filteredMovies);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setsort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movielist_heading">
          {title}{" "}
          <img src={emoji} alt={`${emoji} icon`} className="navbar_emoji" />
        </h2>
        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />
          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Desending</option>
          </select>
        </div>
      </header>

      <div className="movie_card_box">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} dataMovie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
