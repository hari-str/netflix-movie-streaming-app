import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mediaType } from "../../type";
import "../Row/Row.css";
import "./Card.css";

const Card = ({ mediaType, movie, isLarge, base_url }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className={` ${isLarge ? "cards_large" : "cards"}`}></div>
      ) : (
        <Link
          to={`${mediaType}/${movie.id}`}
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
