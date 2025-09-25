import React, { useState, useEffect, forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const initEmailJS = () => {
      return new Promise((resolve, reject) => {
        let attempts = 0;
        const maxAttempts = 3;
        const initAttempt = () => {
          try {
            if (typeof window.emailjs !== 'undefined') {
              window.emailjs.init('FT7rglcfZQkqlgUXG'); // Provided user ID
              console.log('EmailJS initialized successfully');
              resolve();
            } else if (attempts < maxAttempts) {
              attempts++;
              console.warn(`EmailJS not loaded, retrying (${attempts}/${maxAttempts})...`);
              setTimeout(initAttempt, 2000); // Retry after 2 seconds
            } else {
              reject(new Error('EmailJS library failed to load after maximum attempts'));
            }
          } catch (error) {
            console.error('EmailJS initialization failed:', error);
            reject(error);
          }
        };
        initAttempt();
      });
    };
    initEmailJS()
      .then(() => console.log('EmailJS initialization completed'))
      .catch((error) => {
        console.error('Failed to initialize EmailJS after retries:', error);
        alert('Failed to initialize contact form service. Please check your internet connection or try again later.');
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert('Please enter your name.');
      document.querySelector('#name').focus();
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert('Please enter a valid email address.');
      document.querySelector('#email').focus();
      return;
    }
    if (!formData.message.trim()) {
      alert('Please enter a message.');
      document.querySelector('#message').focus();
      return;
    }

    const formDataToSend = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    setIsSending(true);

    if (typeof window.emailjs !== 'undefined') {
      window.emailjs.send('service_vdp57ue', 'template_jsdvg0o', formDataToSend)
        .then((response) => {
          console.log('EmailJS success:', response);
          alert('✅ Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
          console.error('EmailJS error:', error);
          alert('❌ Failed to send message. Please check your EmailJS configuration or try again.');
        })
        .finally(() => {
          setIsSending(false);
        });
    } else {
      console.error('EmailJS not initialized');
      alert('Contact form service is not available. Please try again later.');
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="max-w-4xl mx-auto p-8 bg-opacity-20 bg-purple-800 rounded-xl mb-8 shadow-md opacity-0 translate-y-10 transition-all duration-700"
    >
      <h2 className="text-4xl font-bold text-center mb-6 text-pink-300">Contact Me</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <label className="font-semibold text-purple-300">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded-lg bg-opacity-30 bg-indigo-900 text-white border border-purple-600 focus:border-pink-400 outline-none transition-all duration-300"
          placeholder="Your Name"
        />

        <label className="font-semibold text-purple-300">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded-lg bg-opacity-30 bg-indigo-900 text-white border border-purple-600 focus:border-pink-400 outline-none transition-all duration-300"
          placeholder="Your Email"
        />

        <label className="font-semibold text-purple-300">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded-lg bg-opacity-30 bg-indigo-900 text-white border border-purple-600 focus:border-pink-400 outline-none transition-all duration-300 resize-y min-h-[120px]"
          placeholder="Your Message"
        />

        <button
          type="submit"
          disabled={isSending}
          className="p-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all duration-300 disabled:bg-gray-500 shadow-md"
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <p className="text-lg">
        Email: <a href="mailto:awai5.afz2l@gmail.com" className="text-blue-300 hover:text-blue-100">awai5.afz2l@gmail.com</a>
      </p>
      <p className="text-lg">Phone: 03186740221</p>
      <p className="text-lg">
        <a href="/cv.pdf" download="MyCV.pdf" className="text-blue-300 hover:text-blue-100">
          Download My CV (PDF)
        </a>
      </p>
    </section>
  );
});

export default Contact;
