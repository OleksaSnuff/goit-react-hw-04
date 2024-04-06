import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photoData, onClick }) => {
  return (
    <ul className={css.list}>
      {photoData.map((photo) => {
        return (
          <li key={photo.id}>
            <ImageCard photo={photo} onClick={() => onClick(photo)} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
