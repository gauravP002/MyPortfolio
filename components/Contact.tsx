
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { socialLinks } from '../data/portfolioData';

// Mock EmailJS - in a real app, you'd use the library
// import emailjs from '@emailjs/browser';

const ContactContent: React.FC = () => {
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

    // This is where you would integrate EmailJS
    /*
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: form.name,
        to_name: 'Gaurav Pandey',
        from_email: form.email,
        to_email: 'your_email@example.com',
        message: form.message,
      },
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
        setLoading(false);
        setStatus({ type: 'success', message: 'Thank you! I will get back to you soon.' });
        setForm({ name: '', email: '', message: '' });
    }, (error) => {
        setLoading(false);
        console.error(error);
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    });
    */

    // Mocking the API call
    setTimeout(() => {
      setLoading(false);
      setStatus({ type: 'success', message: 'Thank you! I will get back to you soon.' });
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
      <div className="mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mb-12"></div>
      
      <div className="flex flex-col lg:flex-row gap-10">
        <motion.div 
          className="lg:w-1/2 bg-white dark:bg-slate-800 p-8 rounded-lg shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
            <label className="flex flex-col">
              <span className="font-medium mb-2">Your Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className="bg-slate-100 dark:bg-slate-700 py-3 px-4 rounded-lg outline-none border-none"/>
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-2">Your Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email address?" className="bg-slate-100 dark:bg-slate-700 py-3 px-4 rounded-lg outline-none border-none"/>
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-2">Your Message</span>
              <textarea rows={5} name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className="bg-slate-100 dark:bg-slate-700 py-3 px-4 rounded-lg outline-none border-none resize-none"/>
            </label>

            {status.message && <p className={`${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>{status.message}</p>}
            
            <button type="submit" disabled={loading} className="bg-gradient-to-r from-indigo-500 to-cyan-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:shadow-lg transition-shadow disabled:opacity-50">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>

        <motion.div 
            className="lg:w-1/2 flex flex-col justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <p className="text-lg mb-6">You can also find me on these platforms:</p>
            <div className="flex gap-6">
                {socialLinks.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="p-4 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:text-indigo-500 dark:hover:text-cyan-400 hover:-translate-y-1 transition-all">
                        <link.icon size={28}/>
                    </a>
                ))}
            </div>
        </motion.div>
      </div>
    </div>
  );
};

const Contact = SectionWrapper(ContactContent, 'contact');
export default Contact;
