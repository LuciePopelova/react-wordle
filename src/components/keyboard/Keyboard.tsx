import { useContext, useEffect, useState } from 'react';
import { ActionType } from '../../actions/gameActions';
import { keys } from '../../constants/keyConstants';
import { TileStatusType } from '../../constants/tileConstants';
import { GameContext } from '../../contexts/GameContext';
import { getKeyStatuses } from '../../helpers/gameHelper';
import { Button, KeyboardWrapper } from './KeyboardStyles';

const Keyboard = () => {
  const {
    state: { activePosition, activeRow, isGameWon, guesses, word },
    dispatch,
  } = useContext(GameContext);
  const [keyStatuses, setKeyStatuses] = useState<{
    [key: string]: TileStatusType;
  }>({});

  useEffect(() => {
    setKeyStatuses(getKeyStatuses(guesses, word));
  }, [activeRow]);

  const handleSetWordClick = (event: any) => {
    const value = event.target.value;

    if (activeRow <= 5 && !isGameWon) {
      let updatedRow = guesses[activeRow].split('');

      if (value === '<<' && activePosition > 0) {
        updatedRow.pop();
        dispatch({ type: ActionType.MoveBackward });
        dispatch({
          type: ActionType.UpdateLetter,
          payload: updatedRow.join(''),
        });
      } else if (value === 'ENTER' && activePosition === 5) {
        dispatch({ type: ActionType.MoveToNextRow });
      } else if (activePosition < 5 && value !== '<<' && value !== 'ENTER') {
        updatedRow[activePosition] = value;
        dispatch({ type: ActionType.MoveForward });
        dispatch({
          type: ActionType.UpdateLetter,
          payload: updatedRow.join(''),
        });
      }
    }
  };

  return (
    <KeyboardWrapper>
      {keys.map((key, index) => (
        <Button
          status={keyStatuses[key] ?? TileStatusType.TILE_STATUS_EMPTY}
          key={index}
          value={key}
          onClick={handleSetWordClick}
        >
          {key}
        </Button>
      ))}{' '}
    </KeyboardWrapper>
  );
};

export default Keyboard;
