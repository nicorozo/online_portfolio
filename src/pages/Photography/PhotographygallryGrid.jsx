const PhotographygallryGrid = () => {
  return (
    <section className="gallery_grid-section">
      <div className="gallery_grid-block">
        <div className="gallery_grid-picture-container">
          <img src="./gallery/NicoR (1).jpg" alt="Portrait" />
        </div>
      </div>
      <div className="gallery_grid-block">
        <div className="gallery_grid-container-collumn square">
          <div className="gallery_grid-picture-container">
            <img src="./gallery/NicoR (1).jpg" alt="Portrait" />
          </div>
          <div className="gallery_grid-picture-container">
            <img src="./gallery/NicoR (1).jpg" alt="Portrait" />
          </div>
        </div>
        <div className="gallery_grid-container-collumn">
          <div className="gallery_grid-picture-container">
            <img src="./gallery/NicoR (1).jpg" alt="Portrait" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographygallryGrid;
