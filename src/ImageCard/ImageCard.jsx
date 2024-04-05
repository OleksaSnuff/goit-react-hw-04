const ImageCard = ({ photoData }) => {
  console.log(photoData);
  //   console.log(photoData.urls);
  //   console.log(photoData.urls.small);
  return (
    <div>
      <img src={photoData.urls.small} alt="" />
    </div>
  );
};
export default ImageCard;
