import { useEffect, useState } from "react";
import Logo from "./Logo";
import "./utils.css";

const NavPages = ({ pageName }) => {
  const [isNavScroll, setIsNavScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavScroll(true);
      } else {
        setIsNavScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav_pages">
      <div className={`nav_pages-fixed ${isNavScroll ? "scrolled" : ""}`}>
        <Logo />
        <span>&nbsp;/&nbsp;</span>
        <span className="nav_pages-page-name">{pageName}</span>
      </div>
    </div>
  );
};

export default NavPages;
