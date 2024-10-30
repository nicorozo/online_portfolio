import { useEffect, useRef, useState } from "react";

const DevProjectsCard = ({ title, tags, description, image, link }) => {
  const [isVisible, setIsVisible] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 1 } // Adjust the threshold as needed
    );
    if (myRef.current) {
      observer.observe(myRef.current);
    }

    return () => {
      if (myRef.current) {
        observer.unobserve(myRef.current);
      }
    };
  }, []);

  return (
    <div ref={myRef} className={`dev_pro-card `}>
      <div className="dev_pro-card-line-container">
        <div
          className={`dev_pro-card-line circle ${
            isVisible ? "highlighted" : ""
          }`}
        ></div>
        <div
          className={`dev_pro-card-line ${isVisible ? "highlighted" : ""}`}
        ></div>
      </div>
      <div className="dev_pro-card-info-container">
        <div className="dev_pro-card-info-container-div">
          <h4 className="dev_pro-card-info-title">{title}</h4>
          <div className="dev_pro-card-info-tags-container">
            {tags.map((tag) => {
              return (
                <div key={title + tag} className="dev_pro-card-info-tag">
                  {tag}
                </div>
              );
            })}
          </div>
          <p className="dev_pro-card-info-description">{description}</p>
          <a href={link} className="dev_pro-card-info-tag button">
            See yourself
          </a>
        </div>
        <div className="dev_pro-card-info-container-div">
          <img src={image} alt="Project Image" className="dev_pro-card-img" />
        </div>
      </div>
    </div>
  );
};

export default DevProjectsCard;
