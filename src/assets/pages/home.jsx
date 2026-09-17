const MovieModal = ({ movie, onClose }) => {
  if (!movie) {
    return null;
  }

  const image =
    movie.image?.original ||
    movie.image?.medium ||
    "https://via.placeholder.com/600x900?text=No+Image";

  const rating = movie.rating?.average || "N/A";

  const genres =
    movie.genres && movie.genres.length > 0
      ? movie.genres.join(", ")
      : "N/A";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        <div className="modal-grid">
          <div>
            <img
              src={image}
              alt={movie.name}
              className="modal-poster"
            />
          </div>

          <div className="modal-info">
            <h2>{movie.name}</h2>

            <div className="modal-details">
              <p>
                <strong>Release Date:</strong>{" "}
                {movie.premiered || "N/A"}
              </p>

              <p>
                <strong>Rating:</strong> ⭐ {rating}
              </p>

              <p>
                <strong>Genre:</strong> {genres}
              </p>

              <p>
                <strong>Language:</strong>{" "}
                {movie.language || "N/A"}
              </p>

              <p>
                <strong>Runtime:</strong>{" "}
                {movie.runtime
                  ? `${movie.runtime} minutes`
                  : "N/A"}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {movie.status || "N/A"}
              </p>
            </div>

            <h3>Overview</h3>

            <div
              className="summary"
              dangerouslySetInnerHTML={{
                __html:
                  movie.summary ||
                  "<p>No summary available.</p>",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;