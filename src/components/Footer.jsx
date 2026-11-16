export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} <span>Vignesh</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
