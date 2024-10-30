const AboutMeTech = ({ children }) => {
  return (
    <div className={`dev_info-interactive-modal`}>
      {children}
      <h4>Web Developer</h4>

      <p>
        <strong>Experience:</strong> 3+ years of experience building responsive,
        scalable web applications.
      </p>

      <h3>Technical Skills</h3>
      <ul>
        <li>
          <strong>Front-End:</strong> Proficient in <strong>React</strong>{" "}
          (HTML, CSS, JavaScript, TypeScript), with extensive use of{" "}
          <strong>Next.js</strong> and <strong>Material UI</strong> for
          component-based, optimized interfaces.
        </li>
        <li>
          <strong>Back-End:</strong> Hands-on experience with{" "}
          <strong>Python</strong> and <strong>Node.js</strong> as supporting
          technologies, with MySQL as a relational database.
        </li>
      </ul>
    </div>
  );
};

export default AboutMeTech;
