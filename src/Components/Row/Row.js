import React, { useState, useEffect } from "react";
import axios from "../../helpers/axios";
import "./Row.css";
import Card from "../card/Card";

const Row = ({ mediaType, title, fetchUrl, isLarge = false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [fetchUrl]);

  // console.log(mediaType);
  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLarge && movie?.poster_path) ||
              (!isLarge && movie?.backdrop_path)) && (
              <Card
                movie={movie}
                isLarge={isLarge}
                base_url={base_url}
                mediaType={mediaType}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
