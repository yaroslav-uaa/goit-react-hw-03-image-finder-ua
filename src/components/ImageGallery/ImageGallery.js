import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ gallery, getLargeImg }) => (
  <ul className="ImageGallery">
    {gallery.map(img => (
      <ImageGalleryItem key={img.id} img={img} getLargeImg={getLargeImg} />
    ))}
  </ul>
);

export default ImageGallery;
