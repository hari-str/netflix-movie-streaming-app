import React, { useState, useEffect } from "react";
import axios from "../../helpers/axios";
import requests from "../../helpers/requests";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = ({ mediaType }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    };
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <Link to={`${mediaType}/${movie.id}`} className="banner__playbtn">
            <FaPlay className="play_icon" /> Play
          </Link>

          <Link to={`${mediaType}/${movie.id}`} className="banner__listbtn">
            <AiOutlineInfoCircle className="info_icon" />
            More Info
          </Link>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
