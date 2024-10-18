/* eslint-disable react/prop-types */
const PhotographyHeading = ({ yellow, white }) => {
  return (
    <h3 className="photo_gallery-h3">
      <span className="photo_gallery-span yellow">{yellow}</span>
      <span className="photo_gallery-span">{white}</span>
    </h3>
  );
};

export default PhotographyHeading;
