import iconWally from "../../assets/iconWally/Wally.png";
import iconStar from "../../assets/iconStar/Icon awesome-star.png";
import iconHeart from "../../assets/iconHeart/Icon awesome-heart.png";

export function Home() {
  return (
    <div className="w-full h-screen bg-colorBlack">
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
              className=""
              src="https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG"
              alt="filme"
            />
            <p className="font-bold text-[14px] text-colorWhite">
              Homem-Aranha: Sem Volta pra casa
            </p>
            <div className="flex flex-row items-center justify-between">
              <div className="flex fle-row items-center space-x-1">
                <img className="w-[13px] h-[12px]" src={iconStar} alt="icone"/>
                <p className="font-bold text-[12px] text-colorOrange">8.2</p>
              </div>
              <p className="font-regular text-[12px] text-colorGrey">2021</p>
              <div className="flex fle-row items-center space-x-1">
                <img className="w-[13px] h-[12px]" src={iconHeart} alt="icone" />
                <p className="font-regular text-[12px] text-colorGrey">8.2</p>
              </div>
            </div>
          </div>

          <div className="w-full space-y-[8px]">
            <img
              className=""
              src="https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG"
            />
            <p className="font-bold text-[14px] text-colorWhite">
              Homem-Aranha: Sem Volta pra casa
            </p>
            <div>
              <p>8.2</p>
              <p>2021</p>
              <p>10.523</p>
            </div>
          </div>

          <div className="w-full">
            <img
              className=""
              src="https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG"
            />
            <p className="font-bold text-[14px] text-colorWhite">
              Homem-Aranha: Sem Volta pra casa
            </p>
            <div>
              <p>8.2</p>
              <p>2021</p>
              <p>10.523</p>
            </div>
          </div>

          <div className="w-full">
            <img
              className=""
              src="https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG"
            />
            <p className="font-bold text-[14px] text-colorWhite">
              Homem-Aranha: Sem Volta pra casa
            </p>
            <div>
              <p>8.2</p>
              <p>2021</p>
              <p>10.523</p>
            </div>
          </div>

          <div className="w-full">
            <img
              className=""
              src="https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG"
            />
            <p className="font-bold text-[14px] text-colorWhite">
              Homem-Aranha: Sem Volta pra casa
            </p>
            <div>
              <p>8.2</p>
              <p>2021</p>
              <p>10.523</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
