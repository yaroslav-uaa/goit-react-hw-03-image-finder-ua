const ImageGalleryItem = ({ img, getLargeImg }) => {
  const { webformatURL, tags } = img;
  return (
    <li className="ImageGalleryItem" onClick={() => getLargeImg(img)}>
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};
export default ImageGalleryItem;
