export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <p className="footer-name">Wilmar Florez Samudio</p>
          <p>Full-Stack &amp; Applied AI Engineer</p>
        </div>
        <div className="footer-meta">
          <nav className="social-links" aria-label="Perfiles profesionales">
            <a href="https://www.linkedin.com/in/wilmar-florez/" target="_blank" rel="noopener noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/wilmarFlorez" target="_blank" rel="noopener noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </nav>
          <p>© {new Date().getFullYear()} Wilmar Florez Samudio</p>
        </div>
      </div>
    </footer>
  );
}
