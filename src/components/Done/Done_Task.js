import React from 'react';
import circle from '../../assets/img/circle.png';
import { useDispatch } from 'react-redux/es/exports';
import { TaskDone } from '../../redux/slices/taskBoxSlice';

const Done_Task = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="Done__Task">
      <div className="Done__Task-container">
        {/* <div className="Done__circleOfTask">{props.index}</div> */}
        <div className="Done__TaskText">
          <p className="Done__TaskText-1">{props.text}</p>
        </div>
      </div>
      <div className="Done__discription">
        <p className="Done__discription-1">{props.discription}</p>
      </div>
    </div>
  );
};

export default Done_Task;
