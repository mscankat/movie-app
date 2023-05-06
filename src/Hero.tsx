import { useEffect, useState } from "react";

interface props {
  getData: (url: string) => Promise<any>;
  imagePath: string;
}

function Hero({ getData, imagePath }: props) {
  interface data {
    backdrop_path: string;
  }
  const [hero, setHero] = useState<data[]>([]);

  const url =
    "https://api.themoviedb.org/3/trending/all/week?api_key=8eeaa71fd3c82618bcba075c2712eaf2";
  useEffect(() => {
    getData(url).then((arr) => {
      setHero(arr.results.slice(0, 3));
    });
  }, []);

  return (
    <div className="hero">
      <img
        src={hero.length > 0 ? imagePath + hero[0].backdrop_path : ""}
        className="img-hero"
        alt=""
      />
    </div>
  );
}

export default Hero;
