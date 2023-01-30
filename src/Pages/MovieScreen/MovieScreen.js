import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_KEY } from "../../apiUrl";
import { MdPlayArrow } from "react-icons/md";
import Casts from "../../Components/Casts/Casts";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

// import { mediaType } from "../../type";

const MovieScreen = () => {
  const { mediaType, id } = useParams();
  const [currentMovie, setCurrentMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    const getData = async () => {
      axios
        .get(
          `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${API_KEY}`
        )
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
    window.scrollTo(0, 0);
  }, [id]);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

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
          <>
            <header
              className="moviebanner"
              style={{
                backgroundImage: `url(${base_url}${currentMovie?.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="moviebanner_container">
                <div className="moviebanner__wrapper">
                  <div className="moviebanner_img">
                    <img
                      src={`${base_url}${currentMovie?.poster_path}`}
                      alt=""
                    />
                  </div>
                  <div className="moviebanner__contents">
                    <h1 className="moviebanner__title">
                      {currentMovie?.original_title ||
                        currentMovie?.original_name}
                    </h1>
                    <div className="moviebanner__generic">
                      {currentMovie?.genres.map((genere, i) => (
                        <div key={i} className="generic__item">
                          {genere.name}
                        </div>
                      ))}
                    </div>
                    <p className="moviebanner_description">
                      {truncate(currentMovie?.overview, 250)}
                    </p>
                    <Link
                      to={`/watch/${mediaType}/${currentMovie.id}`}
                      className="moviebanner__playbtn"
                    >
                      <MdPlayArrow className="play_icon" /> Play
                    </Link>
                  </div>
                </div>
                <Casts />
              </div>
              <div className="moviebanner__fadeBottom" />
            </header>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MovieScreen;
