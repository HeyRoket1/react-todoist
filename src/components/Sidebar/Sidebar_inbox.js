import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import inboxImg from '../../assets/img/inbox.png';
import { useDispatch, useSelector } from 'react-redux/es/exports';

const Sidebar_inbox = () => {
  const { items } = useSelector((state) => state.taskBoxSlice);

  return (
    <Link to="">
      <div className="sidebar__inbox">
        <div className="sidebar__inbox-contour">
          <div className="sidebar__inbox-img">
            <img src={inboxImg} alt="inboxImg" />
          </div>
          <div className="sidebar__inbox-title">Inbox</div>
          <div className="sidebar__inbox-count">{items.length}</div>
        </div>
      </div>
    </Link>
  );
};

export default Sidebar_inbox;
