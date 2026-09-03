import { useState } from 'react';
export default function Profile() {
  const [profile, setProfile] = useState({ name: 'Rahul Sharma', email: 'rahul@example.com', location: 'Delhi' });
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(profile);
  const save = () => {
    setProfile({ ...draft, name: draft.name.trim() || profile.name });
    setEditing(false);
  };
  const initials = profile.name.trim().split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase();
  return <section id="profile" className="py-5"><div className="container"><div className="row justify-content-center"><div className="col-lg-9"><div className="profile-card card border-0 shadow-sm"><div className="card-body p-4 p-lg-5"><div className="d-flex flex-column flex-md-row gap-4 align-items-md-center"><div className="profile-avatar">{initials}</div><div className="flex-grow-1">{editing ? <div className="row g-2">{['name', 'email', 'location'].map((key) => <div className="col-md-4" key={key}><label className="form-label text-capitalize small">{key}</label><input className="form-control" value={draft[key]} onChange={(e) => setDraft({ ...draft, [key]: e.target.value })} /></div>)}</div> : <><span className="text-primary fw-semibold small">YOUR PROFILE</span><h2 className="h3 mt-1 mb-2">{profile.name}</h2><div className="text-secondary d-flex flex-wrap gap-3"><span><i className="bi bi-envelope me-1" />{profile.email}</span><span><i className="bi bi-geo-alt me-1" />{profile.location}</span></div></>}</div><button className="btn btn-outline-primary align-self-md-start" onClick={() => editing ? save() : setEditing(true)}><i className={`bi ${editing ? 'bi-check-lg' : 'bi-pencil'} me-1`} />{editing ? 'Save Profile' : 'Edit Profile'}</button></div><hr className="my-4" /><span className="fw-semibold d-block mb-2">Skills</span><div className="d-flex flex-wrap gap-2">{['React', 'JavaScript', 'Bootstrap', 'HTML', 'CSS'].map((skill) => <span className="badge skill-badge" key={skill}>{skill}</span>)}</div></div></div></div></div></div></section>;
}
