import DevHero from "./DevHero";
import "./DevPage.css";
import DevProjects from "./DevProjects";
import DevTechnologies from "./DevTechnologies";
import Contact from "../../utils/Contact/Contact";

const DevPage = () => {
  return (
    <div className="dev_main">
      <DevHero></DevHero>
      <DevTechnologies></DevTechnologies>
      <DevProjects />
      <Contact></Contact>
    </div>
  );
};

export default DevPage;
