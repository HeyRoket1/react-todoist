import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import dots from '../../assets/img/dots.png';
import filter from '../../assets/img/filter.png';
import comments from '../../assets/img/comments.png';

const Done_header = () => {
  return (
    <div className="Done__header">
      <div className="Done__header-container">
        <div className="Done__header-title">Done</div>
        <div className="Done__header-functional">
          <div className="Done__header-functional-comments ">
            <img src={comments} alt="comments" />
            Comments
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
