import Nav from "../Nav";
import Card from "../Card";
import Footer from "../Footer";

function Trending() {
  const trendingURL =
    "  https://api.themoviedb.org/3/trending/movie/week?api_key=8eeaa71fd3c82618bcba075c2712eaf2&page=1";

  return (
    <>
      <div className="main">
        <Nav />
        <Card
          propUrl={trendingURL}
          mediaType="movie"
          moreButton={true}
          title="Top Rated Movies"
        />
        <Footer />
      </div>
    </>
  );
}

export default Trending;
