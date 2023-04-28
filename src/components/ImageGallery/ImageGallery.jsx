import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import '../styles.css';

const ImageGallery = ({ images }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [alt, setAlt] = useState('');

  const showModal = (largeImage, alt) => {
    setIsShowModal(true);
    setLargeImage(largeImage);
    setAlt(alt);
  };

  const hideModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      {isShowModal && <Modal src={largeImage} alt={alt} onClick={hideModal} />}
      <ul className="ImageGallery">
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            largeImage={largeImageURL}
            isShowModal={showModal}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;