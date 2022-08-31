import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddedTask } from '../../redux/slices/taskBoxSlice';
import { onClickTaskArea } from '../../redux/slices/taskBoxSlice';

const Inbox_buttons = ({
  onClickTaskArea,
  CancleWholeTask,
  taskValueArea,
  onClickTaskButtonAdd,
  toOpenButtons,
}) => {
  const dispatch = useDispatch();

  const onClickCancle = () => {
    onClickTaskButtonAdd();
    CancleWholeTask();
  };

  if (!toOpenButtons) {
    return <div></div>;
  }

  return (
    <div className="inbox__buttons">
      <button className="inbox__buttons-cancel" onClick={onClickCancle}>
        Cancel
      </button>
      <button
        className={`inbox__buttons-add ${!taskValueArea && 'inbox__buttons-add-off'}`}
        onClick={onClickTaskArea}>
        Add task
      </button>
    </div>
  );
};

export default Inbox_buttons;
