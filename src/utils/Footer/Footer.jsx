import "./Footer.css";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="footer_logo-container">
        <span className="footer_logo-span">
          NICO
          <br />
          ROZO
        </span>
        <div className="footer_pages-container">
          <a href="#/photography" className="footer_page-div">
            <span>&nbsp;/&nbsp;</span>
            <span className="footer_page">photography</span>
          </a>
          <a href="#/dev" className="footer_page-div">
            <span>&nbsp;/&nbsp;</span>
            <span className="footer_page">developer</span>
          </a>
        </div>
      </div>

      <div className="footer_social-container">
        <a
          className="footer_social-icon"
          href="https://www.instagram.com/nicolasaren/"
        >
          <IoLogoInstagram />
        </a>
        <a
          className="footer_social-icon"
          href="https://www.linkedin.com/in/nicolas-arenas-aba585198/"
        >
          <IoLogoLinkedin />
        </a>
        <a className="footer_social-icon" href="https://github.com/nicorozo">
          <IoLogoGithub />
        </a>
      </div>
      <p>© 2024 All rights reserved.</p>
    </footer>
  );
};

export default Footer;
