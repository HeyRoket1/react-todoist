import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import dots from '../../assets/img/dots.png';
import filter from '../../assets/img/filter.png';
import trashCan from '../../assets/img/trashCan.png';
import { ClearDone } from '../../redux/slices/doneSlice';

const Done_header = () => {
  const dispatch = useDispatch();

  const onClickClearDone = () => {
    dispatch(ClearDone());
  };

  return (
    <div className="Done__header">
      <div className="Done__header-container">
        <div className="Done__header-title">Done</div>
        <div className="Done__header-functional">
          <div className="Done__header-functional-clear " onClick={onClickClearDone}>
            <img src={trashCan} alt="trashCan" />
            Clear
          </div>
          <div className="Done__header-functional-view ">
            <img src={filter} alt="filter" />
            View
          </div>
          <div className="Done__header-functional-settings ">
            <img src={dots} alt="dots" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Done_header;
