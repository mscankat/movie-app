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
        <Card
          propUrl={upcomingURL}
          mediaType={mediaType[0]}
          toShow={5}
          title="Upcoming"
        />

        <Card
          propUrl={trendingURL}
          mediaType={mediaType[0]}
          toShow={5}
          title="Trending"
        />
      </div>
    </>
  );
}

export default Home;
