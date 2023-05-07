import { useLocation, useSearchParams } from "react-router-dom";
import { getData } from "./index";
import Card from "./Card";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import Footer from "./Footer";
interface Props {
  api_key: String;
}
const mediaType = ["movie", "TV Series"];

function Search({ api_key }: Props) {
  let [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  let searchPath = `https://api.themoviedb.org/3/search/multi?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&page=1&query=${query}&include_adult=false`;
  const [searchQ, setSearchQ] = useState(searchPath);

  // console.log(searchParams.get("q"));
  console.log(searchQ);

  return (
    <>
      <Nav setSearchQ={setSearchQ} />
      <div className="title">Results</div>
      <div className="grid-container">
        {searchParams && <Card propUrl={searchQ} mediaType={mediaType[0]} />}
      </div>
      <Footer />
    </>
  );
}

export default Search;
