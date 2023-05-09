import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Hero from "./Hero";
function App() {
  let navigate = useNavigate();
  let location = useLocation();
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
