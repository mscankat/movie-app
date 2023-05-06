import { randomUUID } from "crypto";
import { useEffect, useState } from "react";

interface Props {
  propUrl: string;
  mediaType: string;
  getData: (url: string) => Promise<any>;
}

function Card({ propUrl, mediaType, getData }: Props) {
  interface response {
    title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    release_date: string;
  }
  interface genreObject {
    id: number;
    name: string;
  }
  const [trendList, setTrendList] = useState<response[]>([]);
  const [genreList, setGenreList] = useState<genreObject[]>([]);
  const imagePath = "https://image.tmdb.org/t/p/original";
  const fetchUrl = propUrl;
  const genreUrl =
    " https://api.themoviedb.org/3/genre/movie/list?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US";

  useEffect(() => {
    getData(fetchUrl).then((arr) => setTrendList(arr.results.slice(0, 12)));
    getData(genreUrl).then((arr) => {
      console.log(arr.genres);
      setGenreList(arr.genres);
    });
  }, []);

  const generateKey = (pre: string) => {
    return `${pre}_${new Date().getTime()}`;
  };

  return (
    <>
      {trendList.length &&
        genreList.length > 0 &&
        trendList.map((current) => {
          let genreText: string[] = [];
          current.genre_ids.forEach(
            (x, i) =>
              i < 3 &&
              genreText.push(genreList.filter((e) => e.id === x)[0].name)
          );
          return (
            <div className="img-wrapper" key={generateKey(current.title)}>
              <img
                className="image"
                src={`https://image.tmdb.org/t/p/original/${current.poster_path}`}
                alt=""
              />
              <div className="overview">
                <span className="card-title">{current.title}</span>
                <div className="info-movie">
                  <span className="media-type">
                    {current.media_type || mediaType}
                  </span>
                  <span className="genre">
                    {genreText.map((x) => {
                      return <span>{x}</span>;
                    })}
                  </span>
                  <span className="date">
                    {current.release_date.split("-")[0]}
                  </span>
                </div>
                <p className="text-overview">{current.overview}</p>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Card;
