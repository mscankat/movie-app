import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const mediaType = ["movie", "TV Series"];

  return (
    <>
      <Nav />
      <Home imagePath={imagePath} mediaType={mediaType} />
      <Footer />
    </>
  );
}

export default App;
