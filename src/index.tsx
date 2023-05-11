import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "./routes/Movies";
import Search from "./Search";
import TvShows from "./routes/TvShows";
import Trending from "./routes/Trending";
import Upcoming from "./routes/Upcoming";
import Top from "./routes/Top";
import TvTrending from "./routes/TvTrending";
import TvUpcoming from "./routes/TvUpcoming";
import TvTop from "./routes/TvTop";
import Error from "./Error";

export async function getData(url: string): Promise<any> {
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
export function generateKey(pre: string) {
  return crypto.randomUUID();
}

// async function loader({ param }) {
//   getData(param);
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/movies",
    element: <Movies />,
    children: [],
  },
  {
    path: "/movies/trending",
    element: <Trending />,
  },
  {
    path: "/movies/upcoming",
    element: <Upcoming />,
  },
  {
    path: "/movies/top",
    element: <Top />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/tv",
    element: <TvShows />,
  },
  {
    path: "/tv/trending",
    element: <TvTrending />,
  },
  {
    path: "/tv/upcoming",
    element: <TvUpcoming />,
  },
  {
    path: "/tv/top",
    element: <TvTop />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
