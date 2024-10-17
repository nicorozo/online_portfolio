import "./utils/Logo";
import "./App.css";
import NavPages from "./utils/NavPages";

function App() {
  return (
    <section className="hero">
      <div className="hero_main-container">
        <NavPages pageName={"main"} />
        <a href="#/dev" className="main_a webdev">
          <span className="hero_a-span">
            WEB <br /> DEV
          </span>
        </a>
        <a href="#/photography" className="main_a photography">
          <span className="hero_a-span">
            PHO
            <br />
            TOG
            <br />
            RAP
            <br />
            HY~
          </span>
        </a>
        <div className="hero_divider-div"></div>
        <div className="hero_divider-div-shape top"></div>
        <div className="hero_divider-div-shape bottom"></div>
      </div>
    </section>
  );
}

export default App;
