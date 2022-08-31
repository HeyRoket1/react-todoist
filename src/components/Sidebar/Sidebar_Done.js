import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import todayImg from '../../assets/img/today.png';
import { useSelector } from 'react-redux';

const Sidebar_Done = () => {
  const { doneItems } = useSelector((state) => state.doneSlice);

  return (
    <Link to="Done">
      <div className="sidebar__Done">
        <div className="sidebar__Done-contour">
          <div className="sidebar__Done-img">
            <img src={todayImg} alt="DoneImg" />
          </div>
          <div className="sidebar__Done-itle">Done</div>
          <div className="sidebar__Done-count">{doneItems.length}</div>
        </div>
      </div>
    </Link>
  );
};

export default Sidebar_Done;
