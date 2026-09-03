import { useState } from 'react';
import { jobs } from './data/jobs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import JobListings from './components/JobListings';
import Applications from './components/Applications';
import './App.css';

export default function App() {
  const [applications, setApplications] = useState([]); // One shared state drives button and dashboard updates.
  const [notice, setNotice] = useState('');
  const apply = (job) => {
    if (applications.some((item) => item.id === job.id)) return; // duplicate prevention
    setApplications([...applications, job]);
    setNotice(`Application sent for ${job.title}. Good luck!`);
    window.setTimeout(() => setNotice(''), 3500);
  };
  return <><Navbar /><main><Hero />{notice && <div className="toast-alert alert alert-success shadow-sm"><i className="bi bi-check-circle-fill me-2" />{notice}</div>}<Dashboard jobCount={jobs.length} applicationCount={applications.length} /><JobListings jobs={jobs} applications={applications} onApply={apply} /><Profile /><Applications applications={applications} /><RegistrationForm /><LoginForm /></main><footer className="footer py-4"><div className="container d-flex flex-column flex-sm-row gap-2 justify-content-between"><span><i className="bi bi-briefcase-fill me-2" />JobPortal</span><span>© 2026 JobPortal. Built for your next move.</span></div></footer></>;
}
