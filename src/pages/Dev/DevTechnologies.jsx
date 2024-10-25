import { FaJs, FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { SiNextdotjs } from "react-icons/si"; // Next.js icon
import DevHeader from "../../utils/DevHeader/DevHeader";

const DevTechnologies = () => {
  const icons = [
    { icon: <AiOutlinePython />, name: "Python" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaHtml5 />, name: "HTML" },
  ];
  return (
    <div className="dev_tech">
      <DevHeader>TECHNOLOGIES</DevHeader>
      <div className="dev_tech-icon-grid">
        {icons.map((item) => (
          <div key={item.name} className="dev_tech-icon-container">
            <div className="dev_tech-icon">{item.icon}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevTechnologies;
