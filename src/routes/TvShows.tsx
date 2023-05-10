import { useState } from "react";
import Card from "../Card";
import Footer from "../Footer";
import Nav from "../Nav";

function TvShows() {
  const [propUrl, setPropUrl] = useState<string>("");
  const [genreName, setGenreName] = useState<string>("");

  const template =
    "https://api.themoviedb.org/3/discover/tv?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&sort_by=popularity.desc&page=1&with_genres=35";
  const comedyUrl =
    "https://api.themoviedb.org/3/discover/tv?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&sort_by=popularity.desc&page=1&with_genres=35";
  const actionUrl =
    "https://api.themoviedb.org/3/discover/tv?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&sort_by=popularity.desc&page=1&with_genres=10759";
  const scienceUrl =
    "https://api.themoviedb.org/3/discover/tv?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&sort_by=popularity.desc&page=1&with_genres=10765";

  function handleClick(e: any) {
    const urlGenre = new URL(template);
    if (e.target.innerHTML.includes(" ")) {
      setGenreName(
        e.target.innerHTML.split(" ")[0] +
          " & " +
          e.target.innerHTML.split(" ").pop()
      );
    } else {
      setGenreName(e.target.innerHTML);
    }

    e.preventDefault();
    switch (e.target.innerHTML) {
      case "Comedy":
        urlGenre.searchParams.set("with_genres", "35");
        setPropUrl(urlGenre.href);
        break;
      case "Action &amp; Adventure":
        urlGenre.searchParams.set("with_genres", "10759");
        setPropUrl(urlGenre.href);
        break;
      case "Reality":
        urlGenre.searchParams.set("with_genres", "10764");
        setPropUrl(urlGenre.href);
        break;
      case "Sci-Fi &amp; Fantasy":
        urlGenre.searchParams.set("with_genres", "10765");
        setPropUrl(urlGenre.href);
        break;
      case "Animation":
        urlGenre.searchParams.set("with_genres", "16");
        setPropUrl(urlGenre.href);
        break;
      case "Crime":
        urlGenre.searchParams.set("with_genres", "80");
        setPropUrl(urlGenre.href);
        break;
      case "Documantary":
        urlGenre.searchParams.set("with_genres", "99");
        setPropUrl(urlGenre.href);
        break;
      case "Drama":
        urlGenre.searchParams.set("with_genres", "18");
        setPropUrl(urlGenre.href);
        break;
    }
  }

  return (
    <>
      {" "}
      <div className="main">
        <Nav />
        <div className="genre-select-container">
          <ul>
            <li onClick={handleClick}>Action & Adventure</li>
            <li onClick={handleClick}>Reality</li>
            <li onClick={handleClick}>Comedy</li>
            <li onClick={handleClick}>Animation</li>
            <li onClick={handleClick}>Crime</li>
            <li onClick={handleClick}>Documantary</li>
            <li onClick={handleClick}>Sci-Fi & Fantasy</li>
            <li onClick={handleClick}>Drama</li>
          </ul>
        </div>
        {propUrl.length === 0 && (
          <>
            <Card
              propUrl={actionUrl}
              mediaType="tv"
              toShow={5}
              title="Action & Adventure"
            />

            <Card
              propUrl={comedyUrl}
              mediaType="tv"
              toShow={5}
              title="Comedy"
            />

            <Card
              propUrl={scienceUrl}
              mediaType="tv"
              toShow={5}
              title="Sci-Fi & Fantasy"
            />
          </>
        )}
        {propUrl.length > 0 && (
          <Card
            mediaType="tv"
            propUrl={propUrl}
            title={genreName}
            moreButton={true}
          />
        )}
        <Footer />{" "}
      </div>
    </>
  );
}

export default TvShows;
