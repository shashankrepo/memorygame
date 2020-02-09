import React, { useContext } from 'react';
import classes from './players.module.scss';
import { Context } from '../../Context';

export const Players = () => {
  const { players, currentPlayer } = useContext(Context);

  return (
    <div className={classes.container}>
      <h3>Score Board</h3>
      <div className={classes.wrapper}>
        <div
          className={
            currentPlayer === 'one' ? classes.activePlayer : classes.player
          }
        >
          Player 1 : {players.one}
        </div>
        <div
          className={
            currentPlayer === 'two' ? classes.activePlayer : classes.player
          }
        >
          Player 2 : {players.two}
        </div>
      </div>
    </div>
  );
};
