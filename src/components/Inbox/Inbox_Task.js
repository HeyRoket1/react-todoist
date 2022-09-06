import React from 'react';
import Inbox_buttons from './Inbox_buttons';
import Inbox_taskBox from './Inbox_taskBox';
import circle from '../../assets/img/circle.png';
import { useDispatch } from 'react-redux/es/exports';
import { TaskDone, RemoveTask } from '../../redux/slices/taskBoxSlice';
import { AddDoneTask } from '../../redux/slices/doneSlice';

import trashCan from '../../assets/img/trashCan.png';

const Inbox_Task = ({ text, discription, index }) => {
  const dispatch = useDispatch();

  const onClickDone = () => {
    dispatch(TaskDone(index));
    dispatch(AddDoneTask({ text, discription, index }));
  };

  const onClickRemoveTask = () => {
    dispatch(RemoveTask(index));
  };

  return (
    <div className="inbox__Task">
      <div className="inbox__Task-container">
        <div className="inbox__circleOfTask">
          <img src={circle} alt="circle" onClick={onClickDone} />
        </div>
        <div className="inbox__TaskText">
          <p className="inbox__TaskText-1">{text}</p>
        </div>
        <div className="trashCan">
          <img src={trashCan} alt="trach can" onClick={onClickRemoveTask} />
        </div>
      </div>
      <div className="inbox__discription">
        <p className="inbox__discription-1">{discription}</p>
      </div>
    </div>
  );
};

export default Inbox_Task;
