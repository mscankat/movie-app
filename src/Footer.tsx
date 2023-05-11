import movie from "./icons/movie.png";

function Footer() {
  return (
    <footer>
      <a href="https://github.com/mscankat/movie-app">Github Repo</a>
      <div>Copyright 2023. All Rights Reserved</div>
      <img src={movie} alt="" />
    </footer>
  );
}

export default Footer;
