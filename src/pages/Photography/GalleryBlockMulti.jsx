const GalleryBlockMulti = ({ inverted }) => {
  return (
    <div className={`gallery_grid-block ${inverted && "inverted"}`}>
      <div className="gallery_grid-container-collumn">
        <div className="gallery_grid-picture-container">
          <img src="./gallery/NicoR (1).jpg" alt="Portrait" />
        </div>
      </div>
      <div className="gallery_grid-container-collumn square">
        {/* Square div */}
        <div className="gallery_grid-picture-container">
          <img src="./gallery/NicoR (1).jpg" alt="Portrait" />
        </div>
        <div className="gallery_grid-picture-container">
          <img src="./gallery/NicoR (1).jpg" alt="Portrait" />
        </div>
      </div>
    </div>
  );
};

export default GalleryBlockMulti;
