import { useEffect, useState } from "react";

import MovieCard from "../../components/MovieCard";
import MovieModal from "../../components/MovieModal";
import Loading from "../../components/Loading";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovies = async (query = "") => {
    setLoading(true);
    setError("");

    try {
      const url = query.trim()
        ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
            query
          )}`
        : "https://api.tvmaze.com/shows";

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      setMovies(data);
    } catch (error) {
      console.error(error);
      setError(
        "Something went wrong. Please check your internet connection."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;

    setSearch(value);

    fetchMovies(value);
  };

  return (
    <main className="movies-page">
      <div className="movies-container">

        <div className="movies-heading">
          <h1>Explore Movies & TV Shows</h1>

          <p>
            Search for your favorite movies and discover
            something new.
          </p>
        </div>

        <div className="search-container">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="🔎 Search for a movie or TV show..."
          />
        </div>

        {loading && <Loading />}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="no-results">
            <h2>No movies found</h2>
            <p>Try searching for another title.</p>
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.show?.id || movie.id}
                movie={movie}
                onSeeDetails={setSelectedMovie}
              />
            ))}
          </div>
        )}
      </div>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </main>
  );
};

export default Movies;