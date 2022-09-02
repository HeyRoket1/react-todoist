import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from '../assets/img/Menu.png';
import Home from '../assets/img/Home.png';
import Plus from '../assets/img/plus.png';
import Help from '../assets/img/Question-mark.png';
import Cup from '../assets/img/cup.png';

import Search from './Search/Search';

import { useSelector } from 'react-redux';

const Header = ({ onClickChangeSideBarState, onClickAddTaskByPlus }) => {
  const { items } = useSelector((state) => state.taskBoxSlice);
  const { doneItems } = useSelector((state) => state.doneSlice);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted) {
      const dataItems = JSON.stringify(items);
      const jsonItems = dataItems ? localStorage.setItem('items', dataItems) : [];

      const dataDoneItems = JSON.stringify(doneItems);
      const jsonDoneItems = dataDoneItems ? localStorage.setItem('doneItems', dataDoneItems) : [];
    }
    setIsMounted(true);
  }, [items]);
  return (
    <div className="header">
      <div className="container">
        <div className="leftButtons">
          <div className="leftButtons__menu">
            <img src={Menu} alt="menu-icon" onClick={onClickChangeSideBarState} />
          </div>
          <div className="leftButtons__home">
            <img src={Home} alt="home-icon" />
          </div>
          <div className="leftButtons__search">
            <Search />
          </div>
        </div>
        <div className="rightButtons">
          <div className="rightButtons__add">
            <img src={Plus} alt="plus-icon" onClick={onClickAddTaskByPlus} />
          </div>
          <div className="rightButtons__cup">
            <img src={Cup} alt="cup" />
            <p>
              {items.length} / {doneItems.length}
            </p>
          </div>
          <div className="rightButtons__help">
            <img src={Help} alt="help-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
