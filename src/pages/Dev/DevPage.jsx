import DevHero from "./DevHero";
import "./DevPage.css";
import DevProjects from "./DevProjects";
import DevTechnologies from "./DevTechnologies";

const DevPage = () => {
  return (
    <div className="dev_main">
      <DevHero></DevHero>
      <DevTechnologies></DevTechnologies>
      <DevProjects />
    </div>
  );
};

export default DevPage;
