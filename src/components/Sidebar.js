import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Sidebar_inbox from './Sidebar/Sidebar_inbox';
import Sidebar_Done from './Sidebar/Sidebar_Done';

const Sidebar = ({ sideBarPopUp }) => {
  if (!sideBarPopUp) {
    return <></>;
  }
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <Sidebar_inbox />
        <Sidebar_Done />
      </div>
    </div>
  );
};

export default Sidebar;
