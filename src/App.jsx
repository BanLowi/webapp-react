import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layout/DefaultLayout";

import Homepage from "./pages/Homepage";
import ShowMovie from "./pages/ShowMovie";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<Homepage />} />
            <Route path="/movies" element={<Homepage />} />
            <Route path="/movies/:id" element={<ShowMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App
