import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { API_KEY } from "../../apiUrl";
import Loading from "../Loading/Loading";
import axios from "axios";
import "./Backdrop.css";

const Backdrop = ({ base_url, mediaType, id }) => {
  const [backdropImage, setBackdropImage] = useState();
  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/images?api_key=${API_KEY}`
      )
      .then((res) => {
        setBackdropImage(res.data.backdrops);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [mediaType, id]);

  return (
    <div className="backdrop__container">
      <h1>Backdrop images</h1>
      {isloading ? (
        <Loading />
      ) : (
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          grabCursor={true}
          style={{ width: "100%", height: "max-content" }}
          className="backdrop__slide"
        >
          {backdropImage &&
            [...backdropImage].splice(0, 10).map((item, i) => (
              <SwiperSlide className="swiper_image" key={i}>
                <img src={`${base_url}${item?.file_path}`} />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

export default Backdrop;
