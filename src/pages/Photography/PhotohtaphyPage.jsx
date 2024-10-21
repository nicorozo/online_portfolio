import Contact from "../../utils/Contact/Contact";
import Footer from "../../utils/Footer/Footer";
import PhotographyGallery from "./PhotographyGallery";
import PhotographyHero from "./PhotographyHero";
import "./PhotographyPage.css";

const PhotohtaphyPage = () => {
  return (
    <section className="photo_main">
      <PhotographyHero />
      <PhotographyGallery />
      <div className="photo_a-website-container">
        <a
          href="https://nicorozo.mypixieset.com/portfolio/"
          className="photo_a-website"
        >
          More Pictures?
        </a>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </section>
  );
};

export default PhotohtaphyPage;
