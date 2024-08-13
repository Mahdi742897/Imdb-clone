import MovieCard from "@/components/MovieCard";
import React from "react";

const Search = async (params) => {
  const searchTerm = params.params.searchTerm;
  const API_KEY = process.env.API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=true&language=en-US&page=1`,
    options
  );
  const data = await res.json();
  const result = data.results;

  console.log(result);

  return result && result.length === 0 ? (
    <h1 className="w-full text-center p-6">Result Not Find...</h1>
  ) : (
    result && (
      <div className="grid  max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center py-4">
        {result.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    )
  );
};

export default Search;
