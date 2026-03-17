// src/components/Footer.tsx
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="flex gap-4 justify-center py-4">
      <a href="https://www.linkedin.com/in/hamzaosailan" target="_blank" rel="noreferrer">
        <span className="hover:text-teal-400 cursor-pointer"><LiaLinkedin /></span>
      </a>
      <a href="https://github.com/hamzaosailan" target="_blank" rel="noreferrer">
        <span className="hover:text-teal-400 cursor-pointer"><BsGithub /></span>
      </a>
    </footer>
  );
}