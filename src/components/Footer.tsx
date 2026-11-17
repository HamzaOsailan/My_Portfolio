import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";
import { FiArrowUpRight, FiArrowUp } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();
  const homeAboutHref = `${pathname === "/" ? "" : "/"}#about`;

  return (
    <footer className="wf-footer" id="footer">
      <div className="wf-footer-inner">
        <div className="wf-footer-top">
          <Link to={homeAboutHref} className="wf-footer-brand">
            HAMZA OSAILAN
          </Link>

          <p>
            Building reliable experiences through quality engineering
            and full-stack development.
          </p>

          <Link to={homeAboutHref} className="wf-back-top">
            BACK TO TOP <FiArrowUp />
          </Link>
        </div>

        <div className="wf-footer-bottom">
          <span className="wf-footer-copy">
            © {new Date().getFullYear()} Hamza Osailan. All rights reserved.
          </span>

          <div className="wf-footer-socials">
            <a
              href="https://www.linkedin.com/in/hamza-osailan"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LiaLinkedin />
              <span>LINKEDIN</span>
              <FiArrowUpRight className="wf-social-arrow" />
            </a>

            <a
              href="https://github.com/HamzaOsailan"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <BsGithub />
              <span>GITHUB</span>
              <FiArrowUpRight className="wf-social-arrow" />
            </a>
          </div>

          <span className="wf-footer-location">
            DESIGNED WITH PURPOSE <i />
          </span>
        </div>
      </div>
    </footer>
  );
}
