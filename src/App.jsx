import "./utils/Logo";
import "./App.css";
import NavPages from "./utils/NavPages";

function App() {
  return (
    <section className="hero">
      <NavPages pageName={"main"} />
      <div className="hero_main-container">
        <a href="#/dev" className="a-webdev">
          <div className="hero_a-filler"></div>
          <span className="hero_a-span">
            WEB <br /> DEV
          </span>
        </a>
        <a href="#/photography" className="a-photography">
          <span className="hero_a-span">
            PHO
            <br />
            TOG
            <br />
            RAP
            <br />
            HY~
          </span>
          <div className="hero_a-filler"></div>
        </a>
        <div className="hero_divider-div"></div>
        <div className="hero_divider-div-shape top"></div>
        <div className="hero_divider-div-shape bottom"></div>
      </div>
    </section>
  );
}

export default App;
