import { useNavigate } from "react-router-dom";

import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function MoviesCard(movie) {
  const navigate = useNavigate();

  function handleTravel() {
    navigate(`/movie/${movie.movie.id}`);
  }

  return (
    <div
      className="w-[14rem] max-w-[100%] mb-4 space-y-1.5 transition-transform duration-300 transform hover:scale-105 cursor-pointer"
      onClick={handleTravel}
    >
      <img
        className="w-full bg-colorBlack rounded-lg"
        src={"https://image.tmdb.org/t/p/original/" + movie.movie.poster_path}
        alt={movie.movie.title}
      />
      <p className="font-bold text-[14px] text-colorWhite">
        {movie.movie.title}
      </p>
      <div className="flex flex-row items-center justify-between">
        <div className="flex fle-row items-center space-x-4">
          <div className="w-[13px] flex items-center">
            <StarIcon className="text-colorOrange" />
          </div>
          <p className="font-bold text-[12px] text-colorOrange">
            {movie.movie.vote_average}
          </p>
        </div>
        <p className="font-regular text-[12px] text-colorGrey">
          {movie.movie.release_date.substr(0, 4)}
        </p>
        <div className="flex fle-row items-center space-x-4">
          <div className="w-[13px] flex items-center">
            <FavoriteIcon className=" text-colorGrey" />
          </div>
          <p className="font-regular text-[12px] text-colorGrey">
            {movie.movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
