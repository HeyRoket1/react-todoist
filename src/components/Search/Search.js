import React, { useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './Search.module.scss';
import SearchLogo from '../../assets/img/searchLogo.svg';
import clearSearch from '../../assets/img/clearSearch.svg';

const Search = () => {
  const searchRef = useRef();
  const [searchState, setSearchState] = useState();

  const onChangeSearch = () => {
    setSearchState(searchRef.current.value);
  };

  const onClickClearSearch = () => {
    setSearchState('');
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={SearchLogo} alt="Searc-logo" />
      <input
        ref={searchRef}
        onChange={onChangeSearch}
        value={searchState}
        className={styles.search}
        placeholder="Search"
      />

      {searchState && (
        <img
          className={styles.clearSearch}
          src={clearSearch}
          alt="Clear-logo"
          onClick={onClickClearSearch}
        />
      )}
    </div>
  );
};

export default Search;
