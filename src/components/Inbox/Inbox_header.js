import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import dots from '../../assets/img/dots.png';
import filter from '../../assets/img/filter.png';
import comments from '../../assets/img/comments.png';

const Inbox_header = () => {
  return (
    <div className="inbox__header">
      <div className="inbox__header-container">
        <div className="inbox__header-title">Inbox</div>
        <div className="inbox__header-functional">
          <div className="inbox__header-functional-comments ">
            <img src={comments} alt="comments" />
            Comments
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
