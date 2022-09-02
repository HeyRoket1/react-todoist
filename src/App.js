import './scss/app.scss';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Inbox from './components/pages/Inbox';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Done from './components/pages/Done';

const App = () => {
  const [sideBarPopUp, setSideBarPopUp] = useState(true);
  const [addTaskBeforeAll, setAddTaskBeforeAll] = useState(false);
  const [toOpenButtons, setToOpenButtons] = useState(false);

  const onClickChangeSideBarState = () => {
    setSideBarPopUp(!sideBarPopUp);
  };

  const onClickAddTaskByPlus = () => {
    setAddTaskBeforeAll(true);
    setToOpenButtons(true);
  };

  return (
    <div className="wrapper">
      <div className="upper-part">
        <Header
          onClickChangeSideBarState={onClickChangeSideBarState}
          onClickAddTaskByPlus={onClickAddTaskByPlus}
        />
      </div>
      <div className="lower-part">
        <div className="lower-part__sidebar">
          <Sidebar sideBarPopUp={sideBarPopUp} />
        </div>
        <div className={`lower-part__inbox ${!sideBarPopUp && 'lower-part__inbox-fullScreen'}`}>
          <Routes>
            <Route
              path="/"
              element={
                <Inbox
                  addTaskBeforeAll={addTaskBeforeAll}
                  setAddTaskBeforeAll={setAddTaskBeforeAll}
                  setToOpenButtons={setToOpenButtons}
                  toOpenButtons={toOpenButtons}
                />
              }
            />
            <Route path="/Done" element={<Done />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
