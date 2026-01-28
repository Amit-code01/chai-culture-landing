import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter) icon

export default function SocialLinks() {
  return (
    <div className="socials flex gap-6 text-3xl">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-pink-500"
      >
        <FaInstagram />
      </a>
      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-black"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-blue-600"
      >
        <FaFacebook />
      </a>
    </div>
  );
}