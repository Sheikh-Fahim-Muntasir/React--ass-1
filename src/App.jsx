import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./assets/pages/home";
import Movies from "./assets/pages/movie";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;