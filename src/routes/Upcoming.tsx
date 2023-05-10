import Card from "../Card";
import Nav from "../Nav";
import Footer from "../Footer";

function Upcoming() {
  const upcomingURL =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=8eeaa71fd3c82618bcba075c2712eaf2&language=en-US&page=1";

  return (
    <>
      <div className="main">
        <Nav />
        <Card
          propUrl={upcomingURL}
          mediaType="movie"
          moreButton={true}
          title="Top Rated Movies"
        />
        <Footer />
      </div>
    </>
  );
}

export default Upcoming;
