export default function Hero() {
  return (
    <section id="home" className="hero-section py-5 py-lg-6">
      <div className="container py-4 py-lg-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <span className="eyebrow"><i className="bi bi-stars me-2" />Your next chapter starts here</span>
            <h1 className="display-3 fw-bold mt-3 mb-3">Find Your <span>Dream Job</span></h1>
            <p className="lead text-secondary mb-4">Discover opportunities that match your skills and career goals.</p>
            <div className="d-flex flex-wrap gap-3"><a className="btn btn-primary btn-lg px-4" href="#jobs">Search Jobs <i className="bi bi-arrow-right ms-2" /></a><a className="btn btn-white btn-lg px-4" href="#jobs">Browse Jobs</a></div>
            <div className="d-flex gap-4 mt-5 text-secondary small"><span><strong className="text-dark d-block fs-5">8+</strong>curated roles</span><span><strong className="text-dark d-block fs-5">5</strong>career fields</span><span><strong className="text-dark d-block fs-5">100%</strong>free to apply</span></div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <div className="hero-card shadow-lg"><div className="d-flex align-items-center gap-3 mb-4"><div className="avatar bg-primary-subtle text-primary"><i className="bi bi-person-workspace" /></div><div><strong>Opportunity awaits</strong><small className="d-block text-secondary">Curated for your career</small></div></div><div className="mini-job"><span className="job-logo bg-info-subtle text-info">N</span><div><strong>Frontend Developer</strong><small>NexaLabs · Bengaluru</small></div><i className="bi bi-bookmark text-primary ms-auto" /></div><div className="mini-job"><span className="job-logo bg-warning-subtle text-warning">P</span><div><strong>UI/UX Designer</strong><small>PixelNest · Mumbai</small></div><i className="bi bi-bookmark text-primary ms-auto" /></div><div className="text-center mt-4"><span className="badge rounded-pill text-bg-success px-3 py-2"><i className="bi bi-check-circle me-1" /> New roles added weekly</span></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
