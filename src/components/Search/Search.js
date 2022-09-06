import React, { useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './Search.module.scss';
import SearchLogo from '../../assets/img/searchLogo.svg';
import clearSearch from '../../assets/img/clearSearch.svg';
import { useDispatch, useSelector } from 'react-redux';
import { SearchTask } from '../../redux/slices/taskBoxSlice';
import { SearchDone } from '../../redux/slices/doneSlice';

const Search = () => {
  const searchRef = useRef();
  const [searchState, setSearchState] = useState();

  const item = useSelector((state) => state.taskBoxSlice.temporaryItems);

  const dispatch = useDispatch();

  const onChangeSearch = () => {
    setSearchState(searchRef.current.value);
    dispatch(SearchTask(searchRef.current.value));
    dispatch(SearchDone(searchRef.current.value));
    console.log(item);
  };

  const onClickClearSearch = () => {
    setSearchState('');
    dispatch(SearchTask(searchRef.current.value));
    dispatch(SearchDone(searchRef.current.value));
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
