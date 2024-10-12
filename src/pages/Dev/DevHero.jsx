import NavPages from "../../utils/NavPages";

const DevHero = () => {
  return (
    <div className="dev_hero">
      <NavPages pageName={"developer"} />
      <div className="dev_hero-video-container">
        <img
          src="https://cdnblog.natrocdn.com/wp-content/uploads/2021/07/html-nedir.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default DevHero;
