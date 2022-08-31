import React from 'react';
import Inbox_buttons from './Inbox_buttons';
import Inbox_taskBox from './Inbox_taskBox';
import circle from '../../assets/img/circle.png';
import { useDispatch } from 'react-redux/es/exports';
import { TaskDone } from '../../redux/slices/taskBoxSlice';
import { AddDoneTask } from '../../redux/slices/doneSlice';

const Inbox_Task = ({ text, discription, index }) => {
  const dispatch = useDispatch();

  const onClickDone = () => {
    dispatch(TaskDone(index));
    dispatch(AddDoneTask({ text, discription, index }));
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
      </div>
      <div className="inbox__discription">
        <p className="inbox__discription-1">{discription}</p>
      </div>
    </div>
  );
};

export default Inbox_Task;
