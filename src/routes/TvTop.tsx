import Nav from "../Nav";
import Card from "../Card";
import Footer from "../Footer";

function TvTop() {
  const topRatedURL =
    "   https://api.themoviedb.org/3/tv/top_rated?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&page=1";

  return (
    <>
      <div className="main">
        <Nav />
        <Card
          propUrl={topRatedURL}
          mediaType="movie"
          moreButton={true}
          title="Top Rated Movies"
        />
        <Footer />
      </div>
    </>
  );
}

export default TvTop;
