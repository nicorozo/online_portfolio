import NavPages from "../../utils/NavPages";

const DevHero = () => {
  return (
    <div className="dev_hero">
      <NavPages pageName={"developer"} />
      <div className="dev_hero-video-container">
        <img src="gallery\Frame 40.png" alt="" />
      </div>
      <div className="dev_hero-text-container">
        <p className="dev_hero-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          nihil commodi tempore sit eveniet vitae dicta molestiae quas expedita
          a.
        </p>
      </div>
    </div>
  );
};

export default DevHero;
