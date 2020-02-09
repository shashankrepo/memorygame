import React, { useState } from 'react';

export const Context = React.createContext();

export const Provider = props => {
  const [currentPlayer, setCurrentPlayer] = useState('one');
  const [winner, setWinner] = useState(undefined);
  const [players, setPlayers] = useState({
    one: 0,
    two: 0,
  });

  return (
    <Context.Provider
      value={{
        players,
        setPlayers,
        currentPlayer,
        setCurrentPlayer,
        setWinner,
        winner,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
