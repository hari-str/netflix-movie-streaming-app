import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "../Row/Row.css";

const Card = ({ movie, isLarge, base_url }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="cards">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`movie/${movie.id || movie.original_title}`}
          className="row__poster__links"
          key={movie.id}
        >
          <img
            className={`row__poster ${isLarge && "row__posterLarge"}`}
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.original_title}
          />
        </Link>
      )}
    </>
  );
};

export default Card;
