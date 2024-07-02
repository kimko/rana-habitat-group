// ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://getform.io/f/rbeqqpqb', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-2 md:space-y-6">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="grow" placeholder="Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="Email" />
        </label>
        <div className="flex items-center gap-2">
          <textarea
            name="message"
            placeholder="Message"
            className="grow textarea textarea-bordered textarea-sm md:textarea-lg"
            required
          ></textarea>
        </div>
        {/* Honeypot input to prevent spam */}
        <input type="hidden" name="_gotcha" style={{ display: 'none !important' }} />
        <div className="form-control mt-6 flex justify-center">
          <button type="submit" className="btn btn-primary btn-sm md:btn">
            Send
          </button>
        </div>
      </form>
      <div className="toast toast-top toast-center">
        {status === 'success' && (
          <div className="alert alert-success">
            <span>Message sent!</span>
          </div>
        )}
        {status === 'error' && (
          <div className="alert alert-error">
            <span>There was a problem. Please send an email to lguderyahn@gmail.com.</span>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactForm;
