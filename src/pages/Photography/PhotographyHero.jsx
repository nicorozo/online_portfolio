import { useEffect, useState } from "react";
import NavPages from "../../utils/NavPages";

const PhotographyHero = () => {
  const heroPictures = ["PhHero2", "PhHero3", "PhHero1"];
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  useEffect(() => {
    const changePicture = () => {
      setCurrentPictureIndex((index) => (index + 1) % heroPictures.length);
    };

    const interval = setInterval(changePicture, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      className="photo_hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./${heroPictures[currentPictureIndex]}.jpg)`,
      }}
    >
      <NavPages pageName={"photography"} />
      <div className="photo_hero-div">
        <h2 className="photo_hero-h2">The Power of Photography</h2>
        <p className="photo_hero-text">
          Photography is an art that requires sensitivity and intuition, as it
          is a profession that interacts and relies purely on emotions, it means
          that a good photographer knows where and when to be, how to scavenge
          behind the faces to help that emotion blossom out.
        </p>
      </div>
    </section>
  );
};

export default PhotographyHero;
