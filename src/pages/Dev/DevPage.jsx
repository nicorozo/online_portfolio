import DevHero from "./DevHero";
import "./DevPage.css";
import DevProjects from "./DevProjects";
import DevTechnologies from "./DevTechnologies";

const DevPage = () => {
  return (
    <section className="dev_main">
      <DevHero></DevHero>
      <DevTechnologies></DevTechnologies>
      <DevProjects />
    </section>
  );
};

export default DevPage;
