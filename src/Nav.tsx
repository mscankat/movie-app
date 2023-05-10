import movie from "./icons/movie.png";
import search from "./icons/search.png";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useRef, useState } from "react";

function Nav() {
  const [usrInput, setUsrInput] = useState("");

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
  }
  //for search button
  const ref: any = useRef(null);
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow((c) => !c);
    ref.current && ref.current.focus();
  }

  return (
    <>
      <nav>
        <a href="/">
          <img src={movie} alt="Logo" className="logo" />
        </a>
        <div className="navbar-links">
          <ul>
            <li className="dropdown">
              <a className="nav-route" href="/movies">
                Movies
              </a>
              <ul className="">
                <li>
                  <a href="/movies">Genres</a>
                </li>
                <li>
                  <a href="/movies/trending">Trending</a>
                </li>
                <li>
                  <a href="/movies/upcoming">Upcoming</a>
                </li>
                <li>
                  <a href="/movies/top">Top Rated</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a className="nav-route" href="/tv">
                TV Shows
              </a>
              <ul className="">
                <li>
                  <a href="/tv">Genres</a>
                </li>
                <li>
                  <a href="/tv/trending">Trending</a>
                </li>
                <li>
                  <a href="/tv/upcoming">Upcoming</a>
                </li>
                <li>
                  <a href="/tv/top">Top Rated</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="search-container">
          <form
            className={show ? "show-search search-form" : "search-form"}
            id="search-bar"
            onSubmit={handleSubmit}
          >
            <input
              ref={ref}
              className="search-input"
              type="text"
              placeholder="Search"
              value={usrInput}
              onChange={(e) => {
                setUsrInput(e.target.value);
              }}
            />
            <div className="btn-search" id="btn-search" onClick={handleClick}>
              <img src={search} className="search-icon" />
              <img src={search} className="search-close" alt="" />
            </div>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Nav;
