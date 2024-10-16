import GalleryBlockMulti from "./GalleryBlockMulti";

const PhotographygallryGrid = () => {
  return (
    <section className="gallery_grid-section">
      {/* Block */}
      <GalleryBlockMulti
        verticalPicture={"./gallery/p2.jpg"}
        square1={"./gallery/p1.jpg"}
        square2={""}
        inverted={true}
      ></GalleryBlockMulti>
      {/* Block */}
      <div className="gallery_grid-picture-container">
        <img src="./gallery/NicoR (20).jpg" alt="Portrait" />
      </div>
      {/* Block */}
      <GalleryBlockMulti
        verticalPicture={"./gallery/NicoR (9).jpg"}
        square1={"./gallery/NicoR (62).jpg"}
        square2={""}
      ></GalleryBlockMulti>
      {/* Block */}
      <div className="gallery_grid-picture-container">
        <img src="./gallery/NicoR (35).jpg" alt="Portrait" />
      </div>
      {/* Block */}
      <GalleryBlockMulti
        verticalPicture={"./gallery/NicoR (4).jpg"}
        square1={"./gallery/NicoR (4).jpg"}
        square2={"./gallery/NicoR (66).jpg"}
        inverted={true}
      ></GalleryBlockMulti>
      {/* Block */}
      <div className="gallery_grid-picture-container">
        <img src="./gallery/NicoR (35).jpg" alt="Portrait" />
      </div>
      {/* Block */}
      <GalleryBlockMulti
        verticalPicture={"./gallery/NicoR (9).jpg"}
        square1={"./gallery/NicoR (4).jpg"}
        square2={""}
      ></GalleryBlockMulti>
    </section>
  );
};

export default PhotographygallryGrid;
