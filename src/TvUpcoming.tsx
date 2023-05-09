import { useState } from "react";
import Card from "./Card";
import Nav from "./Nav";
import Footer from "./Footer";

function TvUpcoming() {
  const upcomingURL =
    "  https://api.themoviedb.org/3/discover/tv?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&sort_by=popularity.desc&first_air_date_year=2023&page=1";
  const [searchQ, setSearchQ] = useState<string[]>([upcomingURL]);
  function handleClick(e: any) {
    e.preventDefault();
    const pageParam =
      new URL(searchQ[searchQ.length - 1]).searchParams.get("page") || 0;
    let moreReq = ` https://api.themoviedb.org/3/discover/tv?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&sort_by=popularity.desc&first_air_date_year=2023&page=${
      Number(pageParam) + 1
    }`;
    setSearchQ([...searchQ, moreReq]);
  }
  return (
    <>
      <Nav />
      <div className="title">Upcoming & New Tv Shows</div>
      <div className="grid-container">
        {searchQ.map((current, index) => {
          return <Card key={current[index]} propUrl={current} mediaType="tv" />;
        })}
      </div>
      <button className="btn-more" onClick={handleClick}>
        Weiter
      </button>
      <Footer />
    </>
  );
}

export default TvUpcoming;
