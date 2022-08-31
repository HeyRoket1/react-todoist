import React, { useEffect, useRef, useState } from 'react';
import Inbox_buttons from './Inbox_buttons';
import Inbox_taskBox from './Inbox_taskBox';
import Inbox_Task from './Inbox_Task';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { AddedTask } from '../../redux/slices/taskBoxSlice';

const Inbox_body = () => {
  const { items } = useSelector((state) => state.taskBoxSlice);

  const dispatch = useDispatch();

  const [taskValueArea, setTaskValueArea] = useState();
  const [discriptionAreaValue, setDiscriptionAreaValue] = useState();
  const [count, setCount] = useState(0);

  const [addTaskBeforeAll, setAddTaskBeforeAll] = useState(false);
  const [toOpenButtons, setToOpenButtons] = useState(false);

  const onClickTaskButtonAdd = () => {
    setAddTaskBeforeAll(!addTaskBeforeAll);
    setToOpenButtons(!toOpenButtons);
  };

  const CancleWholeTask = () => {
    setDiscriptionAreaValue('');
    setTaskValueArea('');
  };

  const onChangeDiscropton = (text) => {
    setDiscriptionAreaValue(text);
  };

  const onChangeTaskArea = (text) => {
    setTaskValueArea(text);
  };

  const onClickTaskArea = () => {
    if (taskValueArea) {
      dispatch(
        AddedTask({
          taskValueArea,
          discriptionAreaValue,
          id: count,
        }),
      );
      setTaskValueArea('');
      setDiscriptionAreaValue('');
      setCount(count + 1);
    }
  };

  console.log(items);

  return (
    <div className="inbox__bodyTask">
      <div className="inbox__body-container">
        {items.map((value) => (
          <Inbox_Task
            key={value.id * 30}
            index={value.id}
            text={value.taskValueArea}
            discription={value.discriptionAreaValue}
          />
        ))}
        <Inbox_taskBox
          taskValueArea={taskValueArea}
          onChangeTaskArea={onChangeTaskArea}
          onChangeDiscropton={onChangeDiscropton}
          discriptionAreaValue={discriptionAreaValue}
          onClickTaskButtonAdd={onClickTaskButtonAdd}
          addTaskBeforeAll={addTaskBeforeAll}
        />
        <Inbox_buttons
          onClickTaskArea={onClickTaskArea}
          CancleWholeTask={CancleWholeTask}
          taskValueArea={taskValueArea}
          onClickTaskButtonAdd={onClickTaskButtonAdd}
          toOpenButtons={toOpenButtons}
        />
      </div>
    </div>
  );
};

export default Inbox_body;
