/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./MovieCard.css";
import Star from "../../assets/glowing-star.png";

const MovieCard = ({ dataMovie }) => {
  return (
    <a
      href={`https://www.themoviedb.org/movie/${dataMovie.id}`}
      target="_blank"
      className="movie_card"
    >
      <img
        src={`https://image.tmdb.org/t/p/original${dataMovie.poster_path}`}
        alt=""
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="align_center movie_details_heading">
          {dataMovie.title}
        </h3>
        <div className="align_center movie_date_rate">
          <p>{dataMovie.release_date}</p>
          <p>
            {dataMovie.vote_average}
            <img src={Star} alt="" className="card_emojin" />
          </p>
        </div>
        <p className="movie_description">
          {dataMovie.overview.slice(0, 100) + "..."}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
