import DevHeader from "../../utils/DevHeader/DevHeader";
import DevProjectsCard from "./DevProjectsCard";
import projects from "./projects";

const DevProjects = () => {
  return (
    <section className="dev_projects">
      <DevHeader>PROJECTS</DevHeader>
      <div className="dev_projects-grid">
        {projects.map((project) => {
          return <DevProjectsCard key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

export default DevProjects;
