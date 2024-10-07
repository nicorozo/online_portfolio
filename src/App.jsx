import "./utils/Logo";
import "./App.css";
import NavPages from "./utils/NavPages";

function App() {
  return (
    <section className="hero">
      <NavPages pageName={"main"} />
      <div className="nav-spacer"></div>
      {/* <nav className="hero_navbar">
        <a href="#/photography">
          <span>Photography</span>
        </a>
        <a href="#/dev">
          <span>WebDev</span>
        </a>
      </nav> */}
      <div className="hero_logo-div">
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
