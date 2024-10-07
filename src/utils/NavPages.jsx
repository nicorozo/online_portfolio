import Logo from "./Logo";
import "./utils.css";

const NavPages = ({ pageName }) => {
  return (
    <div className="nav_pages">
      <Logo />
      <span>&nbsp;/&nbsp;</span>
      <span className="nav_pages-page-name">{pageName}</span>
    </div>
  );
};

export default NavPages;
