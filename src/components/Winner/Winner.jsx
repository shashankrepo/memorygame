import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import classes from './winner.module.scss';

export const Winner = ({ winner }) => {
  return (
    <div className={classes.wrapper}>
      <FontAwesomeIcon icon={faTrophy} size="3x" color="#d4af37" />
      <p>{winner}</p>
      <FontAwesomeIcon icon={faTrophy} size="3x" color="#d4af37" />
    </div>
  );
};
