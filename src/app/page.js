"use client";
import Image from "next/image";
import MovieCard from "@/components/MovieCard";
import Slider from "@/components/Slider";
import Trending from "@/components/Trending";
import TopRateds from "@/components/TopRateds";
import { useEffect, useState } from "react";
import axios from "axios";
import Celebrities from "@/components/Celebrities";

export default function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  // const genre = searchParams?.genre || "fetchTopRated";
  // const genre = "trending"

  // -------------------------------------------------------------------
  const [trendings, setTrendings] = useState([]);
  const [topRateds, setTopRateds] = useState([]);
  const [upcomings, setUpcomings] = useState([]);
  const [celebrities, setCelebrities] = useState([]);
  // -------------------------------------------------------------------

  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
        options
      )
      .then((res) => {
        setTrendings(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
        options
      )
      .then((res) => {
        setTopRateds(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
        options
      )
      .then((res) => {
        setTopRateds(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
        options
      )
      .then((res) => {
        setUpcomings(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/person/day?language=en-US`,
        options
      )
      .then((res) => {
        console.log(res.data.results);
        setCelebrities(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const trendingRes = await fetch(
  //   `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
  //   options
  // );
  // const trendingData = await trendingRes.json();

  // if (!trendingRes.ok) {
  //   throw new Error("something is wrong ...");
  // }

  // const trendings = trendingData.results;
  // -------------------------------------------------------------------------
  // const topRatedRes = await fetch(
  //   `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
  //   options
  // );
  // const topRatedData = await topRatedRes.json();

  // if (!topRatedRes.ok) {
  //   throw new Error("something is wrong ...");
  // }

  // const topRateds = topRatedData.results;

  // const upcomingRes = await fetch(
  //   `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
  //   options
  // );

  // const upcomingData = await upcomingRes.json();

  // if (!upcomingRes.ok) {
  //   throw new Error("something is wrong ...");
  // }

  // const upcoming = upcomingData.results;

  // console.log(upcoming);

  return (
    <>
      <div className="mb-20">
        <Slider item={upcomings} />
      </div>
      {/*  <div className="grid sm:grid-cols-2 max-w-7xl mx-auto lg:grid-cols-3 xl:grid-cols-3 justify-items-center py-4">
        {result?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div> */}
      <div className="flex flex-col gap-5">
        <Trending data={trendings} />
        <TopRateds data={topRateds} />
        <Celebrities data={celebrities} />
      </div>
    </>
  );
}
