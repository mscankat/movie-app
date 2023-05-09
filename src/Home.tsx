import { getData } from "./index";
import Hero from "./Hero";
import Card from "./Card";

interface Props {
  imagePath: string;
  mediaType: string[];
}
function Home({ imagePath, mediaType }: Props) {
  const trendingURL =
    "  https://api.themoviedb.org/3/trending/movie/week?api_key=8eeaa71fd3c82618bcba075c2712eaf2";
  const upcomingURL =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&page=1";

  return (
    <>
      <Hero imagePath={imagePath} />
      <div className="row">
        <div className="title">New</div>
        <div className="grid-container">
          <Card propUrl={upcomingURL} mediaType={mediaType[0]} toShow={5} />
        </div>
        <div className="title">Trending</div>
        <div className="grid-container">
          <Card propUrl={trendingURL} mediaType={mediaType[0]} toShow={5} />
        </div>
      </div>
    </>
  );
}

export default Home;
