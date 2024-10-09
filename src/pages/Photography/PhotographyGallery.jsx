import PhotographygallryGrid from "./PhotographygallryGrid";

const PhotographyGallery = () => {
  return (
    <section className="photo_gallery-section">
      <h3 className="photo_gallery-h3">
        <span className="photo_gallery-span yellow">PHOTO</span>
        <span className="photo_gallery-span">GRAPHER</span>
      </h3>
      <div className="photo_gallery-text-div">
        <span>Made in Colombia</span>
        <span>-</span>
        <span>Located in Poland</span>
      </div>
      <PhotographygallryGrid />
    </section>
  );
};

export default PhotographyGallery;
