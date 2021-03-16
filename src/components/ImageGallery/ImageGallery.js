import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ gallery, onSetImgInfo, onOpenModal }) => (
  <ul className="ImageGallery">
    {gallery.map(({ webformatURL, largeImageURL, tags }, idx) => (
      <ImageGalleryItem
        key={idx}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags}
        onSetImgInfo={onSetImgInfo}
        onOpenModal={onOpenModal}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onSetImgInfo: PropTypes.func.isRequired,
};

export default ImageGallery;
