import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import dots from '../../assets/img/dots.png';
import filter from '../../assets/img/filter.png';
import comments from '../../assets/img/comments.png';
import Done_Task from './Done_Task';
import { useSelector } from 'react-redux';

const Done_body = () => {
  const { doneItems } = useSelector((state) => state.doneSlice);

  console.log('done', doneItems);
  return (
    <div className="Done__bodyTask">
      <div className="Done__body-container">
        {doneItems.map((value) => (
          <Done_Task
            key={value.index * 30}
            index={value.index}
            text={value.text}
            discription={value.discription}
          />
        ))}
      </div>
    </div>
  );
};

export default Done_body;
