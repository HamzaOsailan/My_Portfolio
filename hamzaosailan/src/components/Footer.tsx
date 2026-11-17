// src/components/Footer.tsx

import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-6 py-6 text-2xl text-white">
      
    
      <a
        href="https://www.linkedin.com/in/hamza-osailan"
        target="_blank"
        rel="noreferrer"
        className="hover:text-teal-400 hover:scale-110 transition duration-300"
      >
        <LiaLinkedin />
      </a>

  
      <a
        href="https://github.com/HamzaOsailan"
        target="_blank"
        rel="noreferrer"
        className="hover:text-teal-400 hover:scale-110 transition duration-300"
      >
        <BsGithub />
      </a>

    </footer>
  );
}