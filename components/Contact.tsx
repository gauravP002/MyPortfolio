import React, { useState, useRef } from 'react';
import { socialLinks } from '../data/portfolioData';
import { Icon } from './icons';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | ''; message: string }>({ type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill out all fields.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });
    
    // Mocking an API call
    setTimeout(() => {
      setLoading(false);
      setStatus({ type: 'success', message: 'Thank you! I will get back to you soon.' });
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus({ type: '', message: '' }), 4000);
    }, 1500);
  };

  return (
    <div className="contact-content">
      <h2 className="section-title">Get In Touch</h2>
      <div className="section-underline"></div>
      
      <div className="contact-layout">
        <div className="contact-form-wrapper">
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <label className="contact-form__label">
              <span className="contact-form__span">Your Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className="contact-form__input"/>
            </label>
            <label className="contact-form__label">
              <span className="contact-form__span">Your Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email address?" className="contact-form__input"/>
            </label>
            <label className="contact-form__label">
              <span className="contact-form__span">Your Message</span>
              <textarea rows={5} name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className="contact-form__textarea"/>
            </label>

            {status.message && <p className={`contact-form__status contact-form__status--${status.type}`}>{status.message}</p>}
            
            <button type="submit" disabled={loading} className="button button--primary">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="contact-socials">
            <p className="contact-socials__prompt">You can also find me on these platforms:</p>
            <div className="contact-socials__links">
                {socialLinks.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="social-icon">
                        <Icon name={link.icon} size={28}/>
                    </a>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;