
import PropTypes from 'prop-types';
import '../styles.css';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ src, alt, largeImage, isShowModal }) {
  const createModal = () => {
    isShowModal(largeImage, alt);
  };

  return (
    <li className={css.galleryItem}>
      <img
        className={css.ImageGalleryItem}
        src={src}
        alt={alt}
        onClick={createModal}
      />
    </li>
  );
}

ImageGalleryItem.defaultProps = {
  src: '',
  alt: '',
  largeImage: '',
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  isShowModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;