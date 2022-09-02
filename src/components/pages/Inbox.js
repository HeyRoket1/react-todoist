import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Inbox_body from '../Inbox/Inbox_body';
import Inbox_header from '../Inbox/Inbox_header';

const Inbox = ({ addTaskBeforeAll, setAddTaskBeforeAll, toOpenButtons, setToOpenButtons }) => {
  return (
    <div className="inbox">
      <div className="inbox__container">
        <Inbox_header />
        <Inbox_body
          addTaskBeforeAll={addTaskBeforeAll}
          setAddTaskBeforeAll={setAddTaskBeforeAll}
          setToOpenButtons={setToOpenButtons}
          toOpenButtons={toOpenButtons}
        />
      </div>
    </div>
  );
};

export default Inbox;
