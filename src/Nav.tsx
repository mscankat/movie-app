import movie from "./icons/movie.png";
import search from "./icons/search.png";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

interface Props {
  setSearchQ?: React.Dispatch<React.SetStateAction<string>>;
}

function Nav({ setSearchQ }: Props) {
  const [usrInput, setUsrInput] = useState("");
  //search

  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  function handleSubmit(e: any) {
    e.preventDefault();
    let params = { q: usrInput };
    if (!location.pathname.includes("search")) {
      return navigate(`/search?q=${params.q}`);
    }

    console.log(usrInput);
    setSearchParams(params);
    let searchPath = `https://api.themoviedb.org/3/search/multi?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&page=1&query=${usrInput}&include_adult=false`;
    setSearchQ?.(searchPath);
  }

  return (
    <>
      <nav>
        <img src={movie} alt="Logo" className="logo" />
        <div className="dropdowns">
          <a href="/movies">Movies</a>
          <div>Tv Shows</div>
          <div>Genres</div>
          <div>Animes</div>
        </div>
        <form className="nav-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={usrInput}
            onChange={(e) => {
              setUsrInput(e.target.value);
            }}
          />
          <img src={search} className="search" />
        </form>
      </nav>
    </>
  );
}

export default Nav;
