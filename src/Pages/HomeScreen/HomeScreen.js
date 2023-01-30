import React from "react";
import requests from "../../helpers/requests";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Row from "../../Components/Row/Row";
import Footer from "../../Components/Footer/Footer";
import { mediaType } from "../../type";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Navbar />

      <Banner mediaType={mediaType.tv} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
        mediaType={mediaType.tv}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        mediaType={mediaType.tv}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        mediaType={mediaType.movie}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        mediaType={mediaType.movie}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        mediaType={mediaType.movie}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        mediaType={mediaType.movie}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        mediaType={mediaType.movie}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        mediaType={mediaType.movie}
      />
      <Footer />
    </div>
  );
};

export default HomeScreen;
