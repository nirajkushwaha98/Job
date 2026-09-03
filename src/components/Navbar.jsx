export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom py-3">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary fs-4" href="#home"><i className="bi bi-briefcase-fill me-2" />JobPortal</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#jobs">Jobs</a></li>
            <li className="nav-item"><a className="nav-link" href="#profile">Profile</a></li>
            <li className="nav-item"><a className="nav-link" href="#applications">Applications</a></li>
            <li className="nav-item ms-lg-2"><a className="btn btn-outline-primary px-3 mt-2 mt-lg-0" href="#login">Login</a></li>
            <li className="nav-item ms-lg-1"><a className="btn btn-primary px-3 mt-2 mt-lg-0" href="#register">Register</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
