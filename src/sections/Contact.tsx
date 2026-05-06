import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE - INFO */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Feel free to reach out anytime.
          </p>

          <div className="space-y-3 text-gray-300">
            <p>📧 Email: yourname@gmail.com</p>
            <p>📞 Phone: +255 7XX XXX XXX</p>
            <p>📍 Location: Dar es Salaam, Tanzania</p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-6 flex gap-4">
            <a href="https://github.com/" target="_blank" className="hover:text-blue-400 transition">
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" className="hover:text-blue-400 transition">
              LinkedIn
            </a>
            <a href="https://twitter.com/" target="_blank" className="hover:text-blue-400 transition">
              Twitter
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form className="bg-[#1e293b] p-6 rounded-2xl shadow-lg space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:outline-none focus:border-blue-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:outline-none focus:border-blue-400"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:outline-none focus:border-blue-400"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition font-semibold"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;