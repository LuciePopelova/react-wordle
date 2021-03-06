import React, { useContext } from 'react';
import { TileStatusType } from '../../constants/tileConstants';
import { GameContext } from '../../contexts/GameContext';
import { getTileStatuses } from '../../helpers/gameHelper';
import Tile from '../tile/Tile';
import { RowWrapper } from './RowStyles';

type Props = {
  guess: string;
  rowId: number;
};

const Row: React.FC<Props> = ({ guess, rowId }) => {
  const {
    state: { activeRow, word },
  } = useContext(GameContext);
  let guessArray = new Array(5).fill('');
  let statusArray = new Array(5).fill(TileStatusType.TILE_STATUS_EMPTY);

  if (guess.length <= 5 && guess !== '') {
    guessArray = new Array(5).fill('');
    guessArray.splice(0, guess.length, ...guess.split(''));
  }
  if (guess.length === 5 && activeRow > rowId) {
    guessArray = guess.split('');
    statusArray = getTileStatuses(guessArray, word);
  }

  return (
    <RowWrapper>
      {guessArray.map((letter, index) => (
        <Tile
          id={`tile-${index}-${rowId}`}
          key={index}
          value={letter}
          status={statusArray[index]}
        />
      ))}
    </RowWrapper>
  );
};

export default Row;
