import Logo from "./Logo";
import "./utils.css";

const NavPages = ({ pageName }) => {
  return (
    <div className="nav_pages">
      <Logo />
      <span>/{pageName}</span>
    </div>
  );
};

export default NavPages;
