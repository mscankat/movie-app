import { useState } from "react";
import Card from "../Card";
import Footer from "../Footer";
import Nav from "../Nav";
function Movies() {
  const [propUrl, setPropUrl] = useState<string>("");
  const [genreName, setGenreName] = useState<string>("");

  const template =
    "https://api.themoviedb.org/3/discover/movie?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate";
  const comedyUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate";
  const actionUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate";
  const scienceUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate";

  function handleClick(e: any) {
    const urlGenre = new URL(template);
    setGenreName(e.target.innerHTML);

    e.preventDefault();
    switch (e.target.innerHTML) {
      case "Comedy":
        urlGenre.searchParams.set("with_genres", "35");
        setPropUrl(urlGenre.href);
        break;
      case "Action":
        urlGenre.searchParams.set("with_genres", "28");
        setPropUrl(urlGenre.href);
        break;
      case "Adventure":
        urlGenre.searchParams.set("with_genres", "12");
        setPropUrl(urlGenre.href);
        break;
      case "Science Fiction":
        urlGenre.searchParams.set("with_genres", "878");
        setPropUrl(urlGenre.href);
        break;
      case "Horror":
        urlGenre.searchParams.set("with_genres", "27");
        setPropUrl(urlGenre.href);
        break;
      case "Romance":
        urlGenre.searchParams.set("with_genres", "10749");
        setPropUrl(urlGenre.href);
        break;
      case "Fantasy":
        urlGenre.searchParams.set("with_genres", "14");
        setPropUrl(urlGenre.href);
        break;
      case "Drama":
        urlGenre.searchParams.set("with_genres", "18");
        setPropUrl(urlGenre.href);
        break;
      case "Thriller":
        urlGenre.searchParams.set("with_genres", "53");
        setPropUrl(urlGenre.href);
        break;
    }
    console.log(e.target.innerHTML);
  }

  return (
    <>
      {" "}
      <div className="main">
        <Nav />
        <div className="genre-select-container">
          <ul>
            <li onClick={handleClick}>Action</li>
            <li onClick={handleClick}>Adventure</li>
            <li onClick={handleClick}>Comedy</li>
            <li onClick={handleClick}>Drama</li>
            <li onClick={handleClick}>Fantasy</li>
            <li onClick={handleClick}>Horror</li>
            <li onClick={handleClick}>Science Fiction</li>
            <li onClick={handleClick}>Romance</li>
            <li onClick={handleClick}>Thriller</li>
          </ul>
        </div>
        {propUrl.length === 0 && (
          <>
            <Card
              propUrl={actionUrl}
              mediaType="movie"
              toShow={5}
              title="Action"
            />
            <Card
              propUrl={comedyUrl}
              mediaType="movie"
              toShow={5}
              title="Comedy"
            />
            <Card
              propUrl={scienceUrl}
              mediaType="movie"
              toShow={5}
              title="Science Fiction"
            />
          </>
        )}
        {propUrl.length > 0 && (
          <Card
            title={genreName}
            mediaType="movie"
            propUrl={propUrl}
            moreButton={true}
          />
        )}
        <Footer />{" "}
      </div>
    </>
  );
}

export default Movies;
