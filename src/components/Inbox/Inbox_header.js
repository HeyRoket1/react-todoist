import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import dots from '../../assets/img/dots.png';
import filter from '../../assets/img/filter.png';
import comments from '../../assets/img/comments.png';
import trashCan from '../../assets/img/trashCan.png';
import { useDispatch } from 'react-redux';
import { ClearAllTasks } from '../../redux/slices/taskBoxSlice';

const Inbox_header = () => {
  const dispatch = useDispatch();

  const onClickClearAllTasks = () => {
    dispatch(ClearAllTasks());
  };

  return (
    <div className="inbox__header">
      <div className="inbox__header-container">
        <div className="inbox__header-title">Inbox</div>
        <div className="inbox__header-functional">
          <div className="inbox__header-functional-clear " onClick={onClickClearAllTasks}>
            <img src={trashCan} alt="Clear" />
            Clear
          </div>
          <div className="inbox__header-functional-view ">
            <img src={filter} alt="filter" />
            View
          </div>
          <div className="inbox__header-functional-settings ">
            <img src={dots} alt="dots" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox_header;
