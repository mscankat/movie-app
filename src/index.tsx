import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "./Movies";
import Search from "./Search";

const api_key = "8eeaa71fd3c82618bcba075c2712eaf2";
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
export function generateKey() {
  return crypto.randomUUID();
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/search",
    element: <Search api_key={api_key} />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
