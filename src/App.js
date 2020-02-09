import React, { useContext } from 'react';
import classes from './app.module.scss';
import { Board } from './components/Board/Board';
import { Players } from './components/Players/Players';
import { Winner } from './components/Winner/Winner';
import { Context } from './Context';

const App = () => {
  const { winner } = useContext(Context);

  return (
    <div className={classes.app}>
      <h1>Card Game</h1>
      <div className={classes.container}>
        <Board />
        <Players />
      </div>
      <div className={classes.winner}>
        {winner ? <Winner winner={winner} /> : null}
      </div>
    </div>
  );
};

export default App;
