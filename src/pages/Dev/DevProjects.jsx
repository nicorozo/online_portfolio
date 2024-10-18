import DevProjectsCard from "./DevProjectsCard";

const DevProjects = () => {
  const cardInfo = [
    {
      title: "Wolno",
      tags: ["React", "Next.js"],
      description:
        "Homepage for Wolno, Website solutions for small and medium companies ",
      link: "https://my-site-react-six.vercel.app/",
      image: "../projects/wolno.png",
    },
    {
      title: "Novel Prize API",
      tags: ["React", "Tailwind"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. ",
      link: "https://bright-stardust-02cb60.netlify.app/",
      image: "./projects/Home-web.gif",
    },
    {
      title: "Poject 2",
      tags: ["React", "Next.js"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. ",
      image: "./projects/Home-web.gif",
    },
  ];
  return (
    <section className="dev_projects">
      <h3 className="dev_tech-title-container">PROJECTS</h3>
      <div className="dev_projects-grid">
        {cardInfo.map((project) => {
          return <DevProjectsCard key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

export default DevProjects;
