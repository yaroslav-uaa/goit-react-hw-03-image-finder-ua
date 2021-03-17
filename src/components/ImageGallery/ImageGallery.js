import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ gallery, onSetImgInfo }) => (
  <ul className="ImageGallery">
    {gallery.map(({ webformatURL, largeImageURL, tags }, idx) => (
      <ImageGalleryItem
        key={idx}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags}
        onSetImgInfo={onSetImgInfo}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  onSetImgInfo: PropTypes.func.isRequired,
};

export default ImageGallery;
