import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../apiUrl";
import "./Casts.css";

const Casts = () => {
  const { mediaType, id } = useParams([]);
  const [casts, setCasts] = useState();
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    const getCasts = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${API_KEY}&language=en-US`
        )
        .then((response) => {
          // console.log(response.data);
          setCasts(response.data.cast);
        })
        .catch((err) => console.log(err));
    };
    getCasts();
  }, [mediaType, id]);
  return (
    <div className="casts__wrapper">
      <h1>Cast</h1>
      <div className="casts__img">
        {casts &&
          casts.map((cast, i) => {
            return (
              <div className="cast" key={i}>
                <img src={`${base_url}${cast.profile_path}`} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Casts;
