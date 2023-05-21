import React, { useState, useEffect } from "react";
import axios from "axios";

import iconWally from "../../assets/iconWally/Wally.png";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import loadingSpinner from "../../assets/loadingSpinner/orange_circles.gif";
import { async } from "q";

// https://www.youtube.com/watch?v=vszEFwvltuY

// async function getMovies() {
//   const res = await axios.get(
//     `https://api.themoviedb.org/3/movie/popular/?api_key=9df3e0996c1d5cb4477ac00f77d54220`
//   );
//   console.log(res.data.results);
// }

export function Home() {
  const [movies, setMovies] = useState("Loading");

  // useEffect(() => {
  //   getMovies();
  // }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular/?api_key=9df3e0996c1d5cb4477ac00f77d54220`
      );
      setMovies(response.data.results);
    };
    getData();
  }, []);
  console.log(movies);

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
        <div className="flex items-center py-[1.625rem] px-[6.625rem] space-x-2">
          <img
            className="w-54"
            src={iconWally}
            alt="Ícone Wally, símbolo do Itegraflix"
          />
          <p className="font-bold text-[36px] text-colorOrange">ITEGRAFLIX</p>
        </div>
        <div className="h-1 bg-colorOrange"></div>
        <div className="flex flex-col py-[1.625rem] px-[6.625rem] space-y-[22px]">
          <p className="font-bold text-[28px] text-colorWhite">Populares</p>
          <div id="FILMES" className="flex space-x-[40px]">
            <div className="w-full space-y-[8px]">
              <img
                src="https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG"
                alt="filme"
              />
              <p className="font-bold text-[14px] text-colorWhite">
                Homem-Aranha: Sem Volta pra casa
              </p>
              <div className="flex flex-row items-center justify-between">
                <div className="flex fle-row items-center space-x-4">
                  <div className="w-[13px] flex items-center">
                    <StarIcon className="text-colorOrange" />
                  </div>
                  <p className="font-bold text-[12px] text-colorOrange">8.2</p>
                </div>
                <p className="font-regular text-[12px] text-colorGrey">2021</p>
                <div className="flex fle-row items-center space-x-4">
                  <div className="w-[13px] flex items-center">
                    <FavoriteIcon className=" text-colorGrey" />
                  </div>
                  <p className="font-regular text-[12px] text-colorGrey">
                    10625
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full space-y-[8px]">
              <img
                src="https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG"
                alt="filme"
              />
              <p className="font-bold text-[14px] text-colorWhite">
                Homem-Aranha: Sem Volta pra casa
              </p>
              <div className="flex flex-row items-center justify-between">
                <div className="flex fle-row items-center space-x-4">
                  <div className="w-[13px] flex items-center">
                    <StarIcon className="text-colorOrange" />
                  </div>
                  <p className="font-bold text-[12px] text-colorOrange">8.2</p>
                </div>
                <p className="font-regular text-[12px] text-colorGrey">2021</p>
                <div className="flex fle-row items-center space-x-4">
                  <div className="w-[13px] flex items-center">
                    <FavoriteIcon className=" text-colorGrey" />
                  </div>
                  <p className="font-regular text-[12px] text-colorGrey">
                    10625
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full space-y-[8px]">
              <img
                src="https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG"
                alt="filme"
              />
              <p className="font-bold text-[14px] text-colorWhite">
                Homem-Aranha: Sem Volta pra casa
              </p>
              <div className="flex flex-row items-center justify-between">
                <div className="flex fle-row items-center space-x-4">
                  <div className="w-[13px] flex items-center">
                    <StarIcon className="text-colorOrange" />
                  </div>
                  <p className="font-bold text-[12px] text-colorOrange">8.2</p>
                </div>
                <p className="font-regular text-[12px] text-colorGrey">2021</p>
                <div className="flex fle-row items-center space-x-4">
                  <div className="w-[13px] flex items-center">
                    <FavoriteIcon className=" text-colorGrey" />
                  </div>
                  <p className="font-regular text-[12px] text-colorGrey">
                    10625
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full space-y-[8px]">
              <img
                src="https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG"
                alt="filme"
              />
              <p className="font-bold text-[14px] text-colorWhite">
                Homem-Aranha: Sem Volta pra casa
              </p>
              <div className="flex flex-row items-center justify-between">
                <div className="flex fle-row items-center space-x-4">
                  <div className="w-[13px] flex items-center">
                    <StarIcon className="text-colorOrange" />
                  </div>
                  <p className="font-bold text-[12px] text-colorOrange">8.2</p>
                </div>
                <p className="font-regular text-[12px] text-colorGrey">2021</p>
                <div className="flex fle-row items-center space-x-4">
                  <div className="w-[13px] flex items-center">
                    <FavoriteIcon className=" text-colorGrey" />
                  </div>
                  <p className="font-regular text-[12px] text-colorGrey">
                    10625
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full space-y-[8px]">
              <img
                src="https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG"
                alt="filme"
              />
              <p className="font-bold text-[14px] text-colorWhite">
                Homem-Aranha: Sem Volta pra casa
              </p>
              <div className="flex flex-row items-center justify-between">
                <div className="flex fle-row items-center space-x-4">
                  <div className="w-[13px] flex items-center">
                    <StarIcon className="text-colorOrange" />
                  </div>
                  <p className="font-bold text-[12px] text-colorOrange">8.2</p>
                </div>
                <p className="font-regular text-[12px] text-colorGrey">2021</p>
                <div className="flex fle-row items-center space-x-4">
                  <div className="w-[13px] flex items-center">
                    <FavoriteIcon className=" text-colorGrey" />
                  </div>
                  <p className="font-regular text-[12px] text-colorGrey">
                    10625
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
