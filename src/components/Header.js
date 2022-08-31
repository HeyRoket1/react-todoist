import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from '../assets/img/Menu.png';
import Home from '../assets/img/Home.png';

import Plus from '../assets/img/plus.png';
import Help from '../assets/img/Question-mark.png';
import Search from './Search/Search';

const Header = ({ onClickChangeSideBarState }) => {
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
            <img src={Plus} alt="plus-icon" />
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
