import GalleryBlockMulti from "./GalleryBlockMulti";
import PhotographyHeading from "./PhotographyHeading";

const PhotographygallryGrid = () => {
  return (
    <section className="gallery_grid-section">
      {/* Block */}
      <GalleryBlockMulti
        verticalPicture={"./gallery/photo (10).jpg"}
        square1={"./gallery/photo (9).jpg"}
        square2={""}
        inverted={true}
      ></GalleryBlockMulti>
      {/* Block */}
      <div className="gallery_grid-picture-container">
        <img src="./gallery/photo (2).jpg" alt="Portrait" />
      </div>
      {/* Block */}
      <GalleryBlockMulti
        verticalPicture={"./gallery/photo (1).jpg"}
        square1={"./gallery/photo (8).jpg"}
        square2={""}
      ></GalleryBlockMulti>
      {/* Block */}

      <PhotographyHeading yellow={"ELEVATE"} white={"YOUR BRAND"} />

      <div className="gallery_grid-picture-container">
        <img src="./gallery/photo (4).jpg" alt="Portrait" />
      </div>
      {/* Block */}
      <GalleryBlockMulti
        verticalPicture={"./gallery/photo (12).jpg"}
        square1={"./gallery/photo (15).jpg"}
        square2={"./gallery/photo (13).jpg"}
        inverted={true}
      ></GalleryBlockMulti>
      {/* Block */}

      <PhotographyHeading yellow={"PROFESSIONAL"} white={"IMAGES"} />

      <div className="gallery_grid-picture-container">
        <img src="./gallery/photo (14).jpg" alt="Portrait" />
      </div>
      {/* Block */}

      <GalleryBlockMulti
        verticalPicture={"./gallery/photo (6).jpg"}
        square1={"./gallery/photo (17).jpg"}
        square2={"./gallery/photo (20).jpg"}
      ></GalleryBlockMulti>
      <div className="gallery_grid-picture-container">
        <img src="./gallery/photo (19).jpg" alt="Portrait" />
      </div>

      <div className="gallery_grid-heading-container">
        <PhotographyHeading yellow={"NICO"} white={"ROZO"} />
      </div>

      <div className="gallery_grid-picture-container">
        <img src="./gallery/photo (3).jpg" alt="Portrait" />
      </div>
      <p>
        This is me
        <br />
        A freelancer photographer and developer from Colombia.
        <br />
        Located in Poland, trying to survive myself and the world.
        <br />
      </p>
    </section>
  );
};

export default PhotographygallryGrid;
