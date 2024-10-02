import "./utils/Logo";
import "./App.css";
import Logo from "./utils/Logo";
function App() {
  return (
    <section className="hero">
      <nav className="hero_navbar">
        <a href="/online_portfolio/about">
          <span>About</span>
        </a>
        <a href="/online_portfolio/photography">
          <span>Photography</span>
        </a>
        <a href="/online_portfolio/dev">
          <span>WebDev</span>
        </a>
      </nav>
      <div className="hero_logo-div">
        <Logo />
        <div className="hero_logo-div_span-div">
          <span>PHOTOGRAPHER</span>
          <span> / </span>
          <span>DEVELOPER</span>
        </div>
      </div>
    </section>
  );
}

export default App;
