import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Socials() {
  return (
    <div className="flex justify-center gap-4 mt-10">

      <a
        href="https://github.com/ALTUM-02"
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
        href="https://twitter.com/Martin George "
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-slate-700 hover:border-sky-400 hover:text-sky-400 transition"
      >
        <FaTwitter />
      </a>

      <a
        href="https://instagram.com/Martin_jesus02"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-slate-700 hover:border-sky-400 hover:text-sky-400 transition"
      >
        <FaInstagram />
      </a> 

      

      <a
        href="https://martin249jesus@email.com"
        className="p-4 rounded-xl border border-slate-700 hover:border-sky-400 hover:text-sky-400 transition"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}

export default Socials;