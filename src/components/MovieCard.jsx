const MovieCard = ({ movie, onSeeDetails }) => {
  const show = movie.show || movie;

  const image =
    show.image?.medium ||
    show.image?.original ||
    "https://via.placeholder.com/300x450?text=No+Image";

  const releaseYear = show.premiered
    ? new Date(show.premiered).getFullYear()
    : "N/A";

  const rating = show.rating?.average || "N/A";

  return (
    <div className="movie-card">
      <img
        src={image}
        alt={show.name}
        className="movie-poster"
      />

      <div className="movie-info">
        <h2 title={show.name}>{show.name}</h2>

        <div className="movie-meta">
          <span>📅 {releaseYear}</span>
          <span>⭐ {rating}</span>
        </div>

        <button
          className="details-button"
          onClick={() => onSeeDetails(show)}
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;