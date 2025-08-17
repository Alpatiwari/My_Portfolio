import React, { useState, useEffect } from 'react';

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <div className={`max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {sent ? (
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-green-300">Thanks for reaching out. I'll get back to you soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
export default ContactSection;