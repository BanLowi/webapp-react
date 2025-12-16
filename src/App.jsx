import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import DefaultLayout from "./layout/DefaultLayout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ShowMovie from "./pages/ShowMovie";

import MoviesContext from "./context/MoviesContext";

const moviesURL = "http://localhost:3000/movies";

function App() {

  const [movies, setMovies] = useState([]);

  function getMovies() {

    axios.get(moviesURL)
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => console.log(error))
  };

  useEffect(getMovies, []);

  return (
    <>
      <MoviesContext.Provider value={{ movies }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route index element={<HomePage />} />
              <Route path="/movies" element={<HomePage />} />
              <Route path="/movies/:id" element={<ShowMovie />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/movies/*" element={<h1>404 Not Found</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MoviesContext.Provider>
    </>
  )
};

export default App;
