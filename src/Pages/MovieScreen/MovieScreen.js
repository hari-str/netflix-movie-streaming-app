import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../apiUrl";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const MovieScreen = () => {
  const { id } = useParams();
  const [currentMovie, setCurrentMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    const getData = () => {
      axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        .then((response) => {
          setCurrentMovie(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
          setIsLoading(false);
        });
    };

    getData();
  }, [id]);

  console.log(currentMovie);

  return (
    <>
      <Navbar />
      <div className="movieScreen">
        {error && <div className="error">Movie not found</div>}
        {isLoading ? (
          <div className="loading_spiner">
            <span className="loader"></span>
          </div>
        ) : (
          <div className="movieScreen_wrapper">
            <div className="movieScreen_img">
              <img src={`${base_url}${currentMovie?.poster_path}`} alt="" />
            </div>
            <div className="movieScreen_content">
              <h1>{currentMovie?.original_title}</h1>
              <p>{currentMovie?.overview}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MovieScreen;
