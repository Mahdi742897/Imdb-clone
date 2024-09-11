"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaThumbsUp } from "react-icons/fa6";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const Slider = ({ item }) => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
        }}
      >
        {item?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="flex flex-col items-center relative">
              <Image
                src={`https://image.tmdb.org/t/p/original${
                  movie.backdrop_path || movie.poster_path
                }`}
                width={1000}
                height={300}
                alt="Picture of the author"
                className="group-hover:opacity-75 w-screen h-[75vh] object-cover transition-opacity duration-300 rounded-t-lg"
              />
              <div className="flex flex-col items-start justify-end md:absolute md:bg-gradient-to-t from-black to-transparent w-screen bottom-0 md:h-80 md:px-12 lg:px-32 px-2 py-2">
                <h2 className="mb-2 text-lg font-semibold">{movie.title}</h2>
                <p className="mb-3 text-base font-normal">{movie.overview}</p>
                {/* <p className="text-sm font-light">{movie.release_date}</p>
          <p className="text-sm font-light">{movie.vote_count}</p> */}
                <div className="flex items-center gap-4">
                  <p className="text-sm font-light">{movie.release_date}</p>
                  <span className="flex gap-1 items-center text-sm font-light">
                    <FaThumbsUp className="" />
                    {movie.vote_count}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
