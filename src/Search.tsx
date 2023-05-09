import { useLocation, useSearchParams } from "react-router-dom";
import { getData } from "./index";
import Card from "./Card";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { generateKey } from "./index";
interface Props {
  api_key: String;
}
const mediaType = ["movie", "TV Series"];

function Search({ api_key }: Props) {
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const query = searchParams.get("q");
  let searchPath = `https://api.themoviedb.org/3/search/multi?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&page=1&query=${query}&include_adult=false`;
  const [searchQ, setSearchQ] = useState([searchPath]);

  console.log(searchQ);
  function handleClick(e: any) {
    e.preventDefault();
    const pageParam =
      new URL(searchQ[searchQ.length - 1]).searchParams.get("page") || 0;
    let moreReq = `https://api.themoviedb.org/3/search/multi?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&page=${
      Number(pageParam) + 1
    }&query=${query}&include_adult=false`;
    setSearchQ([...searchQ, moreReq]);
  }

  return (
    <>
      <Nav setSearchQ={setSearchQ} searchQ={searchQ} />
      <div className="title">Results</div>
      <div className="grid-container">
        {searchQ.map((current) => {
          return (
            <Card key={generateKey()} propUrl={current} mediaType={"movie"} />
          );
        })}
      </div>
      <button className="btn-more" onClick={handleClick}>
        Weiter
      </button>
      <Footer />
    </>
  );
}

export default Search;
