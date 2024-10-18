import PhotographygallryGrid from "./PhotographygallryGrid";
import PhotographyHeading from "./PhotographyHeading";

const PhotographyGallery = () => {
  return (
    <section className="photo_gallery-section">
      <PhotographyHeading yellow={"PORTRAIT"} white={"PHOTOGRAPHY"} />
      <div className="photo_gallery-text-div">
        <span>From Colombia</span>
        <span>-</span>
        <span>Located in Poland</span>
      </div>
      <PhotographygallryGrid />
    </section>
  );
};

export default PhotographyGallery;
