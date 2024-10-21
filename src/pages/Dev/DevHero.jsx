import NavPages from "../../utils/NavPages";

const DevHero = () => {
  return (
    <div className="dev_hero">
      <NavPages pageName={"developer"} />
      <div className="dev_hero-text-container">
        <span className="dev_hero-span yellow ">FULL-STACK</span>
        <span className="dev_hero-span white">DEVELOPER</span>
        <div className="dev_hero-div">
          <span className="dev_hero-tag st">UI/UX</span>
          <span className="dev_hero-tag nd">Front end</span>
          <span className="dev_hero-tag rd">Back end</span>
        </div>
      </div>
    </div>
  );
};

export default DevHero;
