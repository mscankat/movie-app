import { useState } from "react";
import Nav from "../Nav";
import Card from "../Card";
import Footer from "../Footer";
import expand from "../icons/expand.png";

function Top() {
  const topRatedURL =
    "  https://api.themoviedb.org/3/movie/top_rated?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&page=1";
  const [searchQ, setSearchQ] = useState<string[]>([topRatedURL]);
  function handleClick(e: any) {
    e.preventDefault();
    const pageParam =
      new URL(searchQ[searchQ.length - 1]).searchParams.get("page") || 0;
    let moreReq = `https://api.themoviedb.org/3/movie/top_rated?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&page=${
      Number(pageParam) + 1
    }`;
    setSearchQ([...searchQ, moreReq]);
  }
  return (
    <>
      <div className="main">
        <Nav />
        <div className="title">Top Rated Movies</div>
        <div className="grid-container">
          {searchQ.map((current, index) => {
            return (
              <Card key={current[index]} propUrl={current} mediaType="movie" />
            );
          })}
        </div>
        <img className="btn-more" onClick={handleClick} src={expand} />
        <Footer />{" "}
      </div>
    </>
  );
}

export default Top;
