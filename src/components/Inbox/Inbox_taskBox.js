import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { AddedTask } from '../../redux/slices/taskBoxSlice';

const Inbox_taskBox = ({
  taskValueArea,
  onChangeTaskArea,
  discriptionAreaValue,
  onChangeDiscropton,
  onClickTaskButtonAdd,
  addTaskBeforeAll,
}) => {
  const valueOfTxtArea = useRef();
  const valueOfDiscriptiom = useRef();

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.taskBoxSlice);

  const onTaskAreaChange = () => {
    onChangeTaskArea(valueOfTxtArea.current.value);
  };

  const onDiscriptionChange = () => {
    onChangeDiscropton(valueOfDiscriptiom.current.value);
  };

  if (!addTaskBeforeAll) {
    return (
      <button className="inbox__buttonToCallTaskBox" onClick={onClickTaskButtonAdd}>
        Add Task
      </button>
    );
  }

  return (
    <div className="inbox__task-box">
      <div className="inbox__taskName">
        <span className="input" role="textbox" contenteditable>
          <textarea
            ref={valueOfTxtArea}
            value={taskValueArea}
            onChange={onTaskAreaChange}
            onKeyPress={(e) => {
              if (e.key === 'Enter') e.preventDefault();
            }}
            placeholder="Add task"
          />
        </span>
      </div>
      <div className="inbox__discriptionOfTaskBox">
        <textarea
          ref={valueOfDiscriptiom}
          value={discriptionAreaValue}
          onChange={onDiscriptionChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') e.preventDefault();
          }}
          placeholder="Description"
        />
      </div>
      <div className="inbox__afterTaskButtons">
        <button className="inbox__dateOfTask">Due date</button>
        <button className="inbox__label">Add label</button>
      </div>
    </div>
  );
};

export default Inbox_taskBox;
