import "./utils/Logo";
import "./App.css";
import Logo from "./utils/Logo";
function App() {
  return (
    <section className="hero">
      <Logo />

      <a href="/dev">
        <span>Web Developement</span>
      </a>
      <a href="/photography">
        <span>Photography</span>
      </a>
      <a href="/about">
        <span>About Me</span>
      </a>
    </section>
  );
}

export default App;
