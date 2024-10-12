import DevHero from "./DevHero";
import "./DevPage.css";
import DevTechnologies from "./DevTechnologies";

const DevPage = () => {
  return (
    <section className="dev_main">
      <DevHero></DevHero>
      <DevTechnologies></DevTechnologies>
    </section>
  );
};

export default DevPage;
