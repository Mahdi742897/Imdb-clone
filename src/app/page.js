import Image from "next/image";
import MovieCard from "@/components/MovieCard";
import Slider from "@/components/Slider";

export default async function Home({searchParams}) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const genre = searchParams?.genre || "fetchTopRated";
  // const genre = "trending"

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${
      genre === "fetchTopRated" ? "top_rated" : "popular"
    }?language=en-US&page=1`,
    options
  );

  const data = await res.json();

  // if (!res.ok) {
  //   throw new Error("something is wrong ...");
  // }

  const result = data.results;

  console.log(result);

  const upcomingRes = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
    options
  );

  const upcomingData = await upcomingRes.json();

  // if (!upcomingRes.ok) {
  //   throw new Error("something is wrong ...");
  // }

  const upcoming = upcomingData.results;

  console.log(upcoming);

  return (
    <>
      <Slider item={upcoming}/>
      <div className="grid sm:grid-cols-2 max-w-7xl mx-auto lg:grid-cols-3 xl:grid-cols-3 justify-items-center py-4">
        {result?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}



