import ImageCard from "../ImageCard/ImageCard";
const ImageGallery = ({ photoData }) => {
  return (
    <ul>
      <li>
        <ImageCard photoData={photoData} />
      </li>
    </ul>
  );
};
export default ImageGallery;
