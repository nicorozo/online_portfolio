const DevProjectsCard = ({ title, tags, description, image }) => {
  return (
    <div className="dev_pro-card">
      <div className="dev_pro-card-line-container">
        <div className="dev_pro-card-line circle"></div>
        <div className="dev_pro-card-line"></div>
      </div>
      <div className="dev_pro-card-info-container">
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
        <button className="dev_pro-card-info-tag button">See yourself</button>
        <img src={image} alt="Project Image" className="dev_pro-card-img" />
      </div>
    </div>
  );
};

export default DevProjectsCard;
