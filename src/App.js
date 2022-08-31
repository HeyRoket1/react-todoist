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

  const onClickChangeSideBarState = () => {
    setSideBarPopUp(!sideBarPopUp);
  };

  return (
    <div className="wrapper">
      <div className="upper-part">
        <Header onClickChangeSideBarState={onClickChangeSideBarState} />
      </div>
      <div className="lower-part">
        <div className="lower-part__sidebar">
          <Sidebar sideBarPopUp={sideBarPopUp} />
        </div>
        <div className={`lower-part__inbox ${!sideBarPopUp && 'lower-part__inbox-fullScreen'}`}>
          <Routes>
            <Route path="/" element={<Inbox />} />
            <Route path="/Done" element={<Done />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
