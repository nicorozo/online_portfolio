import PhotographyGallery from "./PhotographyGallery";
import PhotographyHero from "./PhotographyHero";
import "./PhotographyPage.css";

const PhotohtaphyPage = () => {
  return (
    <section className="photo_main">
      <PhotographyHero />
      <PhotographyGallery />
    </section>
  );
};

export default PhotohtaphyPage;
