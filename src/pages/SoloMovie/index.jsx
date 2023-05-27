import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import iconWally from "../../assets/iconWally/Wally.png";
import loadingSpinner from "../../assets/loadingSpinner/orange_circles.gif";

import { InfoMovie } from "../../components/InfoMovie";

export function SoloMovie() {
  const [movie, setMovie] = useState("Loading");
  const [cast, setCast] = useState([]);
  const { idMovie } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${idMovie}?api_key=9df3e0996c1d5cb4477ac00f77d54220&language=pt-BR`
      );
      setMovie(response.data);
    };
    getData();

    const getCast = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=9df3e0996c1d5cb4477ac00f77d54220`
      );
      setCast(res.data.cast.slice(0, 3));
    };
    getCast();
  }, [idMovie]);

  function handleBackToHome() {
    navigate("/");
  }

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
        <div
          className="flex items-center py-[1.5rem] px-[6.6rem] space-x-2"
        >
          <img onClick={handleBackToHome}
            className="w-54 transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            src={iconWally}
            alt="Ícone Wally, símbolo do Itegraflix"
          />
          <p onClick={handleBackToHome} className="font-bold text-[2.25rem] text-colorOrange transition-transform duration-300 transform hover:scale-105 cursor-pointer">
            ITEGRAFLIX
          </p>
        </div>

        <div className="h-1 bg-colorOrange"></div>
<InfoMovie cast={cast} movie={movie}/>
      </div>
    );
}
