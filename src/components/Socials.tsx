import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Socials() {
  return (
    <div className="flex justify-center gap-4 mt-10">

      <a
        href="https://github.com/ALTUM02"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-slate-700 hover:border-sky-400 hover:text-sky-400 transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/Martin George"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-slate-700 hover:border-sky-400 hover:text-sky-400 transition"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://twitter.com/MartinGeorge "
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-slate-700 hover:border-sky-400 hover:text-sky-400 transition"
      >
        <FaTwitter />
      </a>

      <a
        href="mailto:martin249jesus@email.com"
        className="p-4 rounded-xl border border-slate-700 hover:border-sky-400 hover:text-sky-400 transition"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}

export default Socials;