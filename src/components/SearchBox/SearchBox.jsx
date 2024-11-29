import { useId } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ searchValue, handleSearchChange }) => {
  const searchInputId = useId();
  return (
    <div className={css.searchBox}>
      <label className={css.searchLabel} htmlFor={searchInputId}>
        Find contacts by name
      </label>
      <input
        className={css.searchBoxInput}
        type="text"
        name="search"
        id={searchInputId}
        value={searchValue}
        onChange={event => handleSearchChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
