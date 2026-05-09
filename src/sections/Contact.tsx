import { useState, type FormEvent } from "react";
import Socials from "../components/Socials";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState<{
    name: string;
    email: string;
    message: string;
  } | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = { name, email, message };
    console.log("Contact form submitted:", formData);
    setSubmitted(formData);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE - INFO */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Feel free to reach out anytime.
          </p>

          <div className="space-y-3 text-gray-300">
            <p>📧 Email: martin249jesus@gmail.com</p>
            <p>📞 Phone: +255 659 853 584</p>
            <p>📍 Location: Dodoma, Tanzania</p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-6 flex gap-4">
            <Socials />
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          className="bg-[#1e293b] p-6 rounded-2xl shadow-lg space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:outline-none focus:border-blue-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:outline-none focus:border-blue-400"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:outline-none focus:border-blue-400"
          ></textarea>

          <button
            onClick={sendtowhatsapp}
            className="w-full py-3 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 hover:opacity-90 transition font-semibold"
          >
            Send Message
          </button>

          {submitted && (
            <div className="rounded-xl border border-green-500 bg-green-950/80 p-4 text-green-100">
              <p className="font-semibold mb-2">Message received</p>
              <p><strong>Name:</strong> {submitted.name}</p>
              <p><strong>Email:</strong> {submitted.email}</p>
              <p><strong>Message:</strong> {submitted.message}</p>
            </div>
          )}
        </form>

      </div>
    </div>
  );
};

export default Contact;