import Image from "next/image";
import Link from "next/link";
import { FaThumbsUp } from "react-icons/fa6";

const MovieCard = ({ movie }) => {
 

  return (
    <div className="group max-w-[410px] max-h-[313px] cursor-pointer transition-shadow duration-200  sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 ">
      <Link href={`/movie/${movie.id}`} className="flex flex-col items-center">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={500}
          alt="Picture of the author"
          className="group-hover:opacity-75 object-cover transition-opacity duration-300 rounded-t-lg"
        />
        <div className="flex flex-col p-2">
          <h1 className="text-md truncate">{movie?.title}</h1>
          <p className="line-clamp-1 text-sm mb-[5px] font-normal">
            {movie.overview}
          </p>
          <div>
            <div className="flex items-center gap-4">
              <p className="text-xs font-thin">{movie.release_date}</p>
              <span className="flex gap-1 items-center text-xs font-thin">
                <FaThumbsUp className="" />
                {movie.vote_count}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
