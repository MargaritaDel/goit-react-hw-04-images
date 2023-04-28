import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';
import css from './Searchbar.module.css'


const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.Form} onSubmit={handleOnSubmit}>
        <button type="submit" className={css.Button}></button>
        <input
          className={css.Input}
          onChange={handleChange}
          value={searchQuery}
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
 