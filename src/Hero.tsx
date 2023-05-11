import { getData } from "./index";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { generateKey } from "./index";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//for styling purposes
const renderArrowPrev = (
  onClickHandler: () => void,
  hasPrev: boolean,
  label: string
) =>
  hasPrev && (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      className="arrow-left"
    ></button>
  );

const renderArrowNext = (
  onClickHandler: () => void,
  hasNext: boolean,
  label: string
) =>
  hasNext && (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      className="arrow-right"
    ></button>
  );
//

interface props {
  imagePath: string;
}

function Hero({ imagePath }: props) {
  interface data {
    title: string;
    overview: string;
    media_type: string;
    genre_ids: number[];
    release_date: string;
    backdrop_path: string;
    id: number;
  }

  const [hero, setHero] = useState<data[]>([]);

  const trendingUrl =
    "https://api.themoviedb.org/3/trending/all/week?api_key=8eeaa71fd3c82618bcba075c2712eaf2";
  useEffect(() => {
    getData(trendingUrl).then((arr) => {
      setHero(arr.results.slice(0, 5));
    });
  }, []);

  return (
    <Carousel
      className="hero"
      centerMode={false}
      showThumbs={false}
      renderArrowNext={renderArrowNext}
      renderArrowPrev={renderArrowPrev}
      infiniteLoop={true}
      autoPlay={true}
      emulateTouch={true}
    >
      {hero.map((current) => {
        return (
          <div className="background" key={current.id}>
            <img
              src={imagePath + current.backdrop_path}
              className="img-hero"
              alt=""
            />
            <div className="hero-info">
              <span className="hero-title">{current.title}</span>
              <span className="hero-type">{current.media_type}</span>
              <span className="hero-date">
                {current.release_date.split("-")[0]}
              </span>
              <span className="hero-overview">{current.overview}</span>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default Hero;
