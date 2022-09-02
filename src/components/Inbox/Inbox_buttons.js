import React, { useEffect, useRef } from 'react';
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

  const UseKey = (key, cd) => {
    const callbackRef = useRef(cd);

    useEffect(() => {
      callbackRef.current = cd;
    });

    useEffect(() => {
      const handel = (event) => {
        if (event.code === key) {
          callbackRef.current(event);
          console.log(event);
        }
      };
      document.addEventListener('keypress', handel);
      return () => document.removeEventListener('keypress', handel);
    }, [key]);
  };

  if (toOpenButtons) {
    UseKey('Enter', onClickTaskArea);
    UseKey('Escape', () => {
      onClickTaskButtonAdd();
      CancleWholeTask();
    });
  }

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
