import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          🎬 Movie Explorer
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/movies" className="nav-button">
            Movies
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;