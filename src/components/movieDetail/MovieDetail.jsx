// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const params = useParams();
  return <h2>Single Movie - {params.id}</h2>;
};

export default MovieDetail;
