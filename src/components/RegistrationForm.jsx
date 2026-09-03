import { useState } from 'react';

const emptyForm = { name: '', email: '', password: '', confirmPassword: '', phone: '', location: '' };
export default function RegistrationForm() {
  const [form, setForm] = useState(emptyForm); // useState keeps the controlled form fields in sync.
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const change = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); setSuccess(false); };
  const submit = (e) => {
    e.preventDefault();
    const next = {};
    Object.entries(form).forEach(([key, value]) => { if (!value.trim()) next[key] = 'This field is required.'; });
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (form.password && form.password.length < 6) next.password = 'Password must be at least 6 characters.';
    if (form.confirmPassword && form.password !== form.confirmPassword) next.confirmPassword = 'Passwords do not match.';
    setErrors(next);
    if (!Object.keys(next).length) { setSuccess(true); setForm(emptyForm); }
  };
  const field = (name, label, type = 'text') => <div className="col-md-6"><label className="form-label" htmlFor={`reg-${name}`}>{label}</label><input id={`reg-${name}`} className={`form-control ${errors[name] ? 'is-invalid' : ''}`} type={type} name={name} value={form[name]} onChange={change} />{errors[name] && <div className="invalid-feedback">{errors[name]}</div>}</div>;
  return <section id="register" className="py-5 bg-light"><div className="container"><div className="row justify-content-center"><div className="col-lg-8"><div className="section-heading text-center mb-4"><span className="text-primary fw-semibold">CREATE YOUR ACCOUNT</span><h2 className="mt-2">Your career journey begins here</h2><p className="text-secondary">Register in a minute and start finding meaningful work.</p></div><div className="card border-0 shadow-sm"><div className="card-body p-4 p-lg-5">{success && <div className="alert alert-success"><i className="bi bi-check-circle-fill me-2" />Registration successful! You can now log in.</div>}<form noValidate onSubmit={submit}><div className="row g-3">{field('name', 'Full Name')}{field('email', 'Email Address', 'email')}{field('password', 'Password', 'password')}{field('confirmPassword', 'Confirm Password', 'password')}{field('phone', 'Phone Number', 'tel')}{field('location', 'Location')}<div className="col-12 mt-4"><button className="btn btn-primary w-100 py-2" type="submit">Create Account <i className="bi bi-arrow-right ms-1" /></button></div></div></form></div></div></div></div></div></section>;
}
