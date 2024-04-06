import css from "./ImageCard.module.css";

const ImageCard = ({ photo, onClick }) => {
  return (
    <div className={css.image}>
      <img
        src={photo.urls.small}
        alt={photo.alternative_slugs.en}
        onClick={onClick}
        className={css.photo}
      />
    </div>
  );
};
export default ImageCard;
