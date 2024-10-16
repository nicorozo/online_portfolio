const GalleryBlockMulti = ({ inverted, verticalPicture, square1, square2 }) => {
  return (
    <div className={`gallery_grid-block ${inverted && "inverted"}`}>
      <div className="gallery_grid-container-collumn">
        <div className="gallery_grid-picture-container">
          <img src={verticalPicture} alt="Portrait" />
        </div>
      </div>
      <div className="gallery_grid-container-collumn square">
        {/* Square div */}
        <div className="gallery_grid-picture-container">
          <img src={square1} alt="Portrait" />
        </div>
        <div className={`gallery_grid-picture-container ${!square2 && "none"}`}>
          <img src={`${!square2 && square1}`} alt="Portrait" />
        </div>
      </div>
    </div>
  );
};

export default GalleryBlockMulti;
