import Contact from "../../utils/Contact";
import PhotographyGallery from "./PhotographyGallery";
import PhotographyHero from "./PhotographyHero";
import "./PhotographyPage.css";

const PhotohtaphyPage = () => {
  return (
    <section className="photo_main">
      <PhotographyHero />
      <PhotographyGallery />
      <Contact></Contact>
    </section>
  );
};

export default PhotohtaphyPage;
