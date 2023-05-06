import movie from "./icons/movie.png";
import search from "./icons/search.png";
import poster from "./icons/poster.jpg";
import poster2 from "./icons/poster2.jpg";
import poster3 from "./icons/poster3.jpg";
import { url } from "inspector";
import { json } from "stream/consumers";
import Card from "./Card";
import Hero from "./Hero";

function App() {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const posterPath = "/v7UF7ypAqjsFZFdjksjQ7IUpXdn.jpg";
  const trendingURL =
    "  https://api.themoviedb.org/3/trending/movie/week?api_key=8eeaa71fd3c82618bcba075c2712eaf2";
  const upcomingURL =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&page=1";
  const mediaType = ["movie", "TV Series"];

  async function getData(url: string): Promise<any> {
    let result;
    await fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((arr) => {
        result = arr;
      });
    return result;
  }

  getData(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US"
  );

  return (
    <>
      <nav>
        <img src={movie} alt="Logo" className="logo" />
        <div className="dropdowns">
          <div>Movies</div>
          <div>Tv Shows</div>
          <div>Genres</div>
          <div>Animes</div>
        </div>
        <div className="nav-2">
          <img src={search} className="search" />
        </div>
      </nav>

      <Hero getData={getData} imagePath={imagePath} />
      <div className="row">
        <div className="title">New</div>
        <div className="grid-container">
          <Card
            propUrl={upcomingURL}
            mediaType={mediaType[0]}
            getData={getData}
          />
        </div>
        <div className="title">Trending</div>
        <div className="grid-container">
          <Card
            propUrl={trendingURL}
            mediaType={mediaType[0]}
            getData={getData}
          />
        </div>
      </div>

      <footer>
        <div>Copyright 2023. All Rights Reserved</div>
        <img src={movie} alt="" />
      </footer>
    </>
  );
}

export default App;
