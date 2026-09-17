const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>🎬 Discover Movies</h2>

        <p>
          Discover your favorite movies and TV shows.
        </p>

        <a
          href="https://github.com/Sheikh-Fahim-Muntasir"
          target="_blank"
          rel="noreferrer"
        >
           
        </a>

        <p className="copyright">
          © {new Date().getFullYear()} Movie Explorer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;