import React, { useState, useEffect } from "react";
import axios from "axios";

import iconWally from "../../assets/iconWally/Wally.png";
import loadingSpinner from "../../assets/loadingSpinner/orange_circles.gif";

import { MoviesCard } from "../../components/MoviesCard";

export function Home() {
  const [movies, setMovies] = useState("Loading");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular/?api_key=9df3e0996c1d5cb4477ac00f77d54220&language=pt-BR`
      );
      setMovies(response.data.results.slice(0,10)); 
      //slice(0,10) porque o problema só pede 10 filmes. 
      //ao retirar o ".slice(0,10), todos o filmes serão mostrados"
    };
    getData();
  }, []);

  if (movies === "Loading" || !movies || movies.length === 0)
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
          <p className="font-bold text-[2.25rem] text-colorOrange">ITEGRAFLIX</p>
        </div>

        <div className="h-1 bg-colorOrange"></div>
        
        <div className="flex flex-col py-[1.5rem] px-[6.6rem] space-y-[1.5rem]">
          <p className="w-[14rem] max-w-[100%]font-bold text-[28px] text-colorWhite">Populares</p>
          <div id="FILMES" className="flex flex-wrap justify-evenly">
            {movies.map((movie) => 
            (
              <MoviesCard movie={movie} key={movie.id}/>
            ))}
          </div>
        </div>
      </div>
    );
}
