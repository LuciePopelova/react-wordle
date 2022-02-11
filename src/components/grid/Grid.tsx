import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import Row from '../row/Row';

const Grid = () => {
  const {
    state: { guesses },
  } = useContext(GameContext);

  return (
    <div>
      {guesses.map((guess, index) => (
        <Row key={index} id={index} guess={guess} />
      ))}
    </div>
  );
};

export default Grid;
