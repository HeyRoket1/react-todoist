import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Inbox_body from '../Inbox/Inbox_body';
import Inbox_header from '../Inbox/Inbox_header';
import Done_header from '../Done/Done_header';
import Done_body from '../Done/Done_body';

const Done = () => {
  return (
    <div className="Done">
      <div className="Done__container">
        <Done_header />
        <Done_body />
      </div>
    </div>
  );
};

export default Done;
