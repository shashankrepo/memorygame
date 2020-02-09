import React from 'react';
import classes from './card.module.scss';

export const Card = ({ image, onClick }) => {
  return (
    <div className={classes.wrapper}>
      <img src={image} alt="card" onClick={onClick} />
    </div>
  );
};
