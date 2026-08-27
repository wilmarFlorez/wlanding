export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <p className="footer-name">Wilmar</p>
          <p>Product Architect &amp; Builder</p>
        </div>
        <p>© {new Date().getFullYear()} Wilmar</p>
      </div>
    </footer>
  );
}
