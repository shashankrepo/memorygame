import React, { useState, useEffect, useContext } from 'react';
import classes from './board.module.scss';
import { Card } from '../Card/Card';
import ReactCardFlip from 'react-card-flip';
import { originalCards } from '../../originalCards';
import { Context } from '../../Context';

const NO_OF_TURN = 2;

export const Board = () => {
  const {
    players,
    setPlayers,
    setCurrentPlayer,
    currentPlayer,
    setWinner,
  } = useContext(Context);
  const [boardCards, setBoardCards] = useState(getBoardCards);
  const [currentPair, setCurrentPair] = useState([]);
  const [disableCards, setDisableCards] = useState(false);

  useEffect(() => {
    if (currentPair.length === NO_OF_TURN) {
      setDisableCards(true);
      checkGame();
    }

    const faceUpCards = boardCards.filter(card => card.isFaceUp === true);
    if (faceUpCards.length === boardCards.length) {
      console.log('game end');
      checkWinner();
    }
  }, [currentPair, boardCards]);

  const flipCard = async id => {
    const playingCards = [...boardCards];
    const index = playingCards.findIndex(card => card.id === id);
    playingCards[index].isFlipped = !playingCards[index].isFlipped;
    setBoardCards(playingCards);
    setCurrentPair([...currentPair, playingCards[index]]);
  };

  const setFaceUpCard = () => {
    const playingCards = [...boardCards];
    const indexC1 = playingCards.findIndex(
      card => card.id === currentPair[0].id,
    );
    const indexC2 = playingCards.findIndex(
      card => card.id === currentPair[1].id,
    );
    playingCards[indexC1].isFaceUp = true;
    playingCards[indexC2].isFaceUp = true;
    setBoardCards(playingCards);
  };

  const checkGame = () => {
    if (currentPair[0].image === currentPair[1].image) {
      calculateScore();
      setFaceUpCard();
      setDisableCards(false);
    } else {
      setTimeout(() => {
        reverseCard();
        setCurrentPlayer(currentPlayer === 'one' ? 'two' : 'one');
        setDisableCards(false);
      }, 2000);
    }
    setCurrentPair([]);
  };

  const reverseCard = () => {
    const playingCards = [...boardCards];
    const indexC1 = playingCards.findIndex(
      card => card.id === currentPair[0].id,
    );
    const indexC2 = playingCards.findIndex(
      card => card.id === currentPair[1].id,
    );
    playingCards[indexC1].isFlipped = !playingCards[indexC1].isFlipped;
    playingCards[indexC2].isFlipped = !playingCards[indexC2].isFlipped;
    setBoardCards(playingCards);
  };

  const calculateScore = () => {
    const newScore = { ...players };
    newScore[currentPlayer] = newScore[currentPlayer] + 1;
    setPlayers(newScore);
  };

  const checkWinner = () => {
    const winner =
      players.one > players.two
        ? 'Player 1 Wins'
        : players.one < players.two
        ? 'Player 2 Wins'
        : 'Match Draw';
    setWinner(winner);
  };

  return (
    <div className={classes.wrapper}>
      {boardCards.map(card => (
        <div
          style={disableCards ? { pointerEvents: 'none' } : null}
          key={card.id}
        >
          <ReactCardFlip
            isFlipped={card.isFlipped}
            flipDirection="horizontal"
            key={card.id}
            containerStyle={card.isFaceUp ? { pointerEvents: 'none' } : null}
          >
            <Card image={card.image} key={card.id} />
            <div
              key={card.id}
              className={classes.frontCard}
              onClick={() => flipCard(card.id)}
            >
              Memory Game
            </div>
          </ReactCardFlip>
        </div>
      ))}
    </div>
  );
};

//shuffle cards
const getBoardCards = () =>
  [...originalCards]
    .map(x => [Math.random(), x])
    .sort(([a], [b]) => a - b)
    .map(([_, x]) => x);
