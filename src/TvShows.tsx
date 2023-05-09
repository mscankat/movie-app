import { useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import Nav from "./Nav";

function TvShows() {
  const [propUrl, setPropUrl] = useState<string[]>([]);
  const [lastReq, setLastReq] = useState<string>("");
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
        setPropUrl([urlGenre.href]);
        break;
      case "Action &amp; Adventure":
        urlGenre.searchParams.set("with_genres", "10759");
        setPropUrl([urlGenre.href]);
        break;
      case "Reality":
        urlGenre.searchParams.set("with_genres", "10764");
        setPropUrl([urlGenre.href]);
        break;
      case "Sci-Fi &amp; Fantasy":
        urlGenre.searchParams.set("with_genres", "10765");
        setPropUrl([urlGenre.href]);
        break;
      case "Animation":
        urlGenre.searchParams.set("with_genres", "16");
        setPropUrl([urlGenre.href]);
        break;
      case "Crime":
        urlGenre.searchParams.set("with_genres", "80");
        setPropUrl([urlGenre.href]);
        break;
      case "Documantary":
        urlGenre.searchParams.set("with_genres", "99");
        setPropUrl([urlGenre.href]);
        break;
      case "Drama":
        urlGenre.searchParams.set("with_genres", "18");
        setPropUrl([urlGenre.href]);
        break;
    }
    // if (e.target.innerHTML === "Comedy") {
    //   setPropUrl([...propUrl, template]);
    // }
    // console.log(e.target.);
    setLastReq(template);
  }
  function handleMore(e: any) {
    e.preventDefault();
    const url = new URL(lastReq);
    const pageNumber = Number(url.searchParams.get("page")) || 0;
    url.searchParams.set("page", (pageNumber + 1).toString());
    setPropUrl([...propUrl, url.href]);
    setLastReq(url.href);
  }
  return (
    <>
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
          <div className="title">Action & Adventure</div>
          <div className="grid-container">
            <Card propUrl={actionUrl} mediaType="tv" toShow={5} />{" "}
          </div>
          <div className="title">Comedy</div>
          <div className="grid-container">
            <Card propUrl={comedyUrl} mediaType="tv" toShow={5} />{" "}
          </div>
          <div className="title">Science Fiction</div>
          <div className="grid-container">
            <Card propUrl={scienceUrl} mediaType="tv" toShow={5} />{" "}
          </div>
        </>
      )}
      <div className="title">{genreName}</div>
      <div className="grid-container">
        {propUrl.length > 0 &&
          propUrl.map((current, index) => {
            console.log("i do");
            return (
              <Card key={current[index]} mediaType="tv" propUrl={current} />
            );
          })}
      </div>
      <button className="btn-more" onClick={handleMore}>
        Weiter
      </button>
      <Footer />
    </>
  );
}

export default TvShows;
