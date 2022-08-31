import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Inbox_body from '../Inbox/Inbox_body';
import Inbox_header from '../Inbox/Inbox_header';

const Inbox = () => {
  return (
    <div className="inbox">
      <div className="inbox__container">
        <Inbox_header />
        <Inbox_body />
      </div>
    </div>
  );
};

export default Inbox;
