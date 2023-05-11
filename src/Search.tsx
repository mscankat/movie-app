import { useSearchParams } from "react-router-dom";
import Card from "./Card";
import Nav from "./Nav";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function Search() {
  let [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get("q");
  let searchPath = `https://api.themoviedb.org/3/search/multi?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&page=1&query=${query}&include_adult=false`;

  const [url, setUrl] = useState(searchPath);
  useEffect(() => {
    query = searchParams.get("q");
    setUrl(searchPath);
  }, [searchParams, query]);

  return (
    <>
      <div className="main">
        <Nav />
        <Card propUrl={url} moreButton={true} title="Results" />;
        <Footer />
      </div>
    </>
  );
}

export default Search;
