import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../apiUrl";
import Loading from "../../Components/Loading/Loading";
import "./WatchScreen.css";

const WatchScreen = () => {
  const { mediaType, id } = useParams();
  const [video, setVideo] = useState([]);
  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${API_KEY}`
      )
      .then((res) => {
        setVideo(res.data.results[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [mediaType, id]);

  return (
    <div className="watch__screen">
      {isloading ? (
        <Loading />
      ) : (
        <div className="video__wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${video.key}?autoplay=1`}
            allow="autoplay"
            frameBorder="0"
            width="100%"
            height="100%"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default WatchScreen;
