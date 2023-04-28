import { useEffect} from 'react';
import PropTypes from 'prop-types';
import '../styles.css';
import css from './Modal.module.css';
export default function Modal({ src, alt, onClick }) {
  useEffect(() => {
    const closeModal = ({ target, currentTarget, code }) => {
      if (code === "Escape" || target === currentTarget) {
        onClick();
      }
    };
    window.addEventListener("keydown", closeModal);
    return () => window.removeEventListener("keydown", closeModal);
  }, [onClick]);

  return (
    <div className={css.Overlay} onClick={onClick}>
      <div className={css.Modal}>
        <img src={src} alt={alt} width="800" height="600" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};