import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function InfoMovie({cast, movie}){
    return(
        <div className="flex flex-col py-[1.5rem] px-[6.6rem] space-y-[1.5rem]">
        <p className="font-bold text-[28px] text-colorWhite">{movie.title}</p>
        <div className="flex flex-row space-x-[4.6rem]">
          <div className="w-1/3 max-w-[100%]">
            <img
              className="w-full bg-colorBlack rounded-lg"
              src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
              alt={movie.title}
            />
          </div>
          <div className="w-2/3 space-y-[1rem]">
            <div className="flex flex-row space-x-[1rem]">
              <div className="flex items-center text-colorOrange space-x-1">
                <StarIcon />
                <p className="font-regular text-[20px]">
                  {movie.vote_average}
                </p>
              </div>
              <div className="flex items-center text-colorGrey space-x-1">
                <FavoriteIcon />
                <p className="font-regular text-[20px]">{movie.vote_count}</p>
              </div>
            </div>

            <div className="flex flex-row">
              <p className="font-regular text-[20px] text-colorGrey">
                Gêneros:
              </p>
              {movie.genres.map((genre, index) => (
                <span
                  key={index}
                  className="font-regular text-[20px] text-colorGrey"
                >
                  &nbsp; {genre.name}
                  {index !== movie.genres.length - 1 && ", "}
                </span>
              ))}
            </div>
            <div className="flex flex-row">
              <p className="font-regular text-[20px] text-colorGrey">
                Produtoras:
              </p>
              {movie.production_companies.map((companies, index) => (
                <span
                  key={index}
                  className="font-regular text-[20px] text-colorGrey"
                >
                  &nbsp; {companies.name}
                  {index !== movie.production_companies.length - 1 && ", "}
                </span>
              ))}
            </div>

            <p className="font-regular text-[22px] text-colorWhite text-justify">
              {movie.overview}
            </p>

            <div className="flex flex-row space-x-[1.75rem]">
              {cast.map((actor, index) => {
                return (
                  <div
                    key={index}
                    className="w-[131px] flex flex-col items-center"
                  >
                    <img
                      className="w-full bg-colorBlack"
                      src={
                        "https://image.tmdb.org/t/p/original/" +
                        actor.profile_path
                      }
                      alt={actor.name}
                    />
                    <p className="font-regular text-[16px] text-colorGrey">
                      {actor.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
}