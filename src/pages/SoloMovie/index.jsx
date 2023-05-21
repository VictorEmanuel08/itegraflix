import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import iconWally from "../../assets/iconWally/Wally.png";
import loadingSpinner from "../../assets/loadingSpinner/orange_circles.gif";

export function SoloMovie() {
  const [movie, setMovie] = useState("Loading");
  const { idMovie } = useParams();

  console.log(idMovie);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setMovie(response.data);
    };
    getData();
  }, []);

  if (movie === "Loading" || !movie || movie.length === 0)
    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-colorBlack">
        <img
          src={loadingSpinner}
          alt="Loading"
          className="bg-colorBlack w-[200px] h-[200px]"
        />
      </div>
    );
  else
    return (
      <div className="w-full min-h-screen bg-colorBlack">
        <div className="flex items-center py-[1.5rem] px-[6.6rem] space-x-2">
          <img
            className="w-54"
            src={iconWally}
            alt="Ícone Wally, símbolo do Itegraflix"
          />
          <p className="font-bold text-[36px] text-colorOrange">ITEGRAFLIX</p>
        </div>
        <div className="h-1 bg-colorOrange"></div>
        <div className="flex flex-col py-[1.5rem] px-[6.6rem] space-y-[1.5rem]">
          <p className="font-bold text-[28px] text-colorWhite">{movie.title}</p>
          <div className="flex flex-wrap justify-evenly">
            <div className="w-[20rem] max-w-[100%]">
              <img
                className="w-full bg-colorBlack rounded-lg"
                src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
                alt={movie.title}
              />
            </div>
            <div>
              oi
              <p></p>
              <p></p>
              <p></p>
              <div>
                <div>
                  <img />
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
