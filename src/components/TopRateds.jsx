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
import MovieCard from "./MovieCard";

const TopRateds = ({ data }) => {
  return (
    <div className=" px-10 max-w-[100vw] flex  flex-col   justify-center">
    <div className="pl-1 ml-3 border-l-2  border-amber-600">
        TopRated
    </div>
  <Swiper
    // pagination={{ clickable: true }}
    modules={[Pagination, Autoplay]}
    // autoplay={{
    //   delay: 4000,
    //   pauseOnMouseEnter: true,
    // }}
    slidesPerView={"auto"}
     className=" flex justify-center items-center mx-auto w-full select-none"
  >
    
    {data?.map((movie) => (
      <SwiperSlide key={movie.id} className="max-w-[300px] flex justify-end">
        <MovieCard movie={movie} key={movie.id} />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
  )
}

export default TopRateds