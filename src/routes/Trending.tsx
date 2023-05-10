import Nav from "../Nav";
import Card from "../Card";
import Footer from "../Footer";
import { useState } from "react";
import expand from "../icons/expand.png";

function Trending() {
  const trendingURL =
    "  https://api.themoviedb.org/3/trending/movie/week?api_key=8eeaa71fd3c82618bcba075c2712eaf2&page=1";
  const [searchQ, setSearchQ] = useState<string[]>([trendingURL]);
  function handleClick(e: any) {
    e.preventDefault();
    const pageParam =
      new URL(searchQ[searchQ.length - 1]).searchParams.get("page") || 0;
    let moreReq = `https://api.themoviedb.org/3/trending/movie/week?api_key=8eeaa71fd3c82618bcba075c2712eaf2&page=${
      Number(pageParam) + 1
    }`;
    setSearchQ([...searchQ, moreReq]);
  }
  return (
    <>
      {" "}
      <div className="main">
        <Nav />
        <div className="title">Trending Movies</div>
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

export default Trending;
