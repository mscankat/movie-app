import { generateKey } from "./index";
import { useEffect, useState } from "react";
import { getData } from "./index";
import notfound from "./icons/poster-not-found.jpg";
interface Props {
  propUrl: string;
  mediaType?: string;
  toShow?: number;
}

function Card({ propUrl, mediaType, toShow }: Props) {
  interface response {
    title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    release_date: string;
    name: string;
    first_air_date?: string;
  }
  interface genreObject {
    id: number;
    name: string;
  }
  const [response, setResponse] = useState<response[]>([]);
  const [genreListMovie, setGenreListMovie] = useState<genreObject[]>([]);
  const [genreListTV, setGenreListTV] = useState<genreObject[]>([]);
  const imagePath = "https://image.tmdb.org/t/p/original";

  const genreUrlMovie =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US";
  const genreUrlTV =
    "https://api.themoviedb.org/3/genre/tv/list?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US";

  useEffect(() => {
    const fetchUrl = propUrl;
    getData(fetchUrl).then((arr) => {
      const filtered = arr.results.filter((x: response) => {
        if (
          x.media_type === "tv" ||
          x.media_type === "movie" ||
          x.media_type === undefined
        ) {
          return x;
        }
      });
      setResponse(filtered.slice(0, toShow));
    });
    getData(genreUrlMovie).then((arr) => {
      setGenreListMovie(arr.genres);
    });
    getData(genreUrlTV).then((arr) => {
      setGenreListTV(arr.genres);
    });
    console.log(propUrl);
  }, [propUrl]);
  const pageUrl = new URL(propUrl);
  if (response.length === 0 && pageUrl.searchParams.get("page") === "1") {
    console.log(response);
    return <h1 className="no-result">No Result</h1>;
  }
  return (
    <>
      {response.length > 0 &&
        response.map((current, index) => {
          //get and combine genres
          let genreText: string[] = [];
          // console.log(current.media_type);
          current.genre_ids &&
            current.genre_ids.length > 0 &&
            current.genre_ids.forEach((x, i) => {
              if (i > 2) return;
              if (current.media_type || mediaType === "movie") {
                const genreMovie = genreListMovie.filter((e) => e.id === x);
                if (genreMovie.length > 0) {
                  genreText.push(genreMovie[0].name);
                }
              } else {
                const genreTV = genreListTV.filter((e) => e.id === x);
                if (genreTV.length > 0) {
                  genreText.push(genreTV[0].name);
                }
              }
            });

          return (
            <div className="img-wrapper" key={generateKey()}>
              <img
                className="image"
                src={
                  current.poster_path
                    ? `https://image.tmdb.org/t/p/original/${current.poster_path}`
                    : notfound
                }
                alt=""
              />
              <div className="overview">
                <span className="card-title">
                  {current.title || current.name}
                </span>
                <div className="info-movie">
                  <span className="media-type">
                    {current.media_type || mediaType}
                  </span>
                  <span className="genre">
                    {genreText.map((x) => {
                      return <span key={generateKey()}>{x}</span>;
                    })}
                  </span>
                  <span className="date">
                    {(current.release_date &&
                      current.release_date.split("-")[0]) ||
                      current.first_air_date?.split("-")[0]}
                  </span>
                </div>
                <p className="text-overview">{current.overview}</p>
              </div>
            </div>
          );
        })}
      {}
    </>
  );
}

export default Card;
