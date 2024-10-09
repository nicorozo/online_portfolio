import GalleryBlockMulti from "./GalleryBlockMulti";

const PhotographygallryGrid = () => {
  return (
    <section className="gallery_grid-section">
      {/* Block */}
      <GalleryBlockMulti inverted={true}></GalleryBlockMulti>
      {/* Block */}
      <div className="gallery_grid-picture-container">
        <img src="./gallery/NicoR (35).jpg" alt="Portrait" />
      </div>
      {/* Block */}
      <GalleryBlockMulti></GalleryBlockMulti>
      {/* Block */}
      <div className="gallery_grid-picture-container">
        <img src="./gallery/NicoR (35).jpg" alt="Portrait" />
      </div>
      {/* Block */}
      <GalleryBlockMulti></GalleryBlockMulti>
      {/* Block */}
      <div className="gallery_grid-picture-container">
        <img src="./gallery/NicoR (35).jpg" alt="Portrait" />
      </div>
      {/* Block */}
      <GalleryBlockMulti></GalleryBlockMulti>
    </section>
  );
};

export default PhotographygallryGrid;
