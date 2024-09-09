// "use client";
import Image from "next/image";
// import { useParams, useSearchParams } from "next/navigation";
import { FaThumbsUp } from "react-icons/fa6";

const Movie = async (movie) => {
  // console.log(movie.params.id);
  // const searchParam = useSearchParams()
  // const { movieId } = useParams();
  // console.log(movieId);
  // const [selectedMovie, setSelectedMovie] = useState();
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
  //       {
  //         options,
  //       }
  //     )
  //     .then((res) => {
  //       setSelectedMovie(res.data.results);
  //       console.log(res);
  //     });
  // }, []);

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie.params.id}?language=en-US`,
    options
  );

  const selectedMovie = await res.json();

  console.log(selectedMovie);
  

  if (!res.ok) {
    throw new Error("something is wrong ...");
  }

    const result = res.results;

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center relative">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            selectedMovie.backdrop_path || selectedMovie.poster_path
          }`}
          width={990}
          height={100}
          alt={selectedMovie.title}
          className="w-screen  md:h-screen object-cover opacity-75"
        />

        <div className="flex flex-col items-start justify-end md:absolute md:bg-gradient-to-t from-black to-transparent w-screen bottom-0 md:h-80 md:px-12 lg:px-32 px-2 py-2">
          <h2 className="mb-2 text-lg font-semibold">{selectedMovie.title}</h2>
          <p className="mb-3 text-base font-normal">{selectedMovie.overview}</p>
          {/* <p className="text-sm font-light">{selectedMovie.release_date}</p>
          <p className="text-sm font-light">{selectedMovie.vote_count}</p> */}
          <div className="flex items-center gap-4">
            <p className="text-sm font-light">{selectedMovie.release_date}</p>
            <span className="flex gap-1 items-center text-sm font-light">
              <FaThumbsUp className="" />
              {selectedMovie.vote_count}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
