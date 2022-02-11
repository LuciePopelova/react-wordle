import { useCallback, useContext, useEffect, useState } from 'react';
import { ActionType } from '../../actions/gameActions';
import { keys } from '../../constants/keyConstants';
import { TileStatusType } from '../../constants/tileConstants';
import { GameContext } from '../../contexts/GameContext';
import { getKeyStatuses } from '../../helpers/gameHelper';
import { Button, KeyboardWrapper } from './KeyboardStyles';

const Keyboard = () => {
  const { state, dispatch } = useContext(GameContext);
  const [keyStatuses, setKeyStatuses] = useState<{
    [key: string]: TileStatusType;
  }>({});

  const onActiveRowChange = useCallback(() => {
    setKeyStatuses(getKeyStatuses(state.guesses, state.word));
  }, [state.activeRow]);

  useEffect(() => {
    onActiveRowChange();
  }, [onActiveRowChange]);

  const handleSetWordClick = (event: any) => {
    const value = event.target.value;

    if (state.activeRow <= 5 && !state.isGameWon) {
      let updatedRow = state.guesses[state.activeRow].split('');

      if (value === '<<' && state.activePosition > 0) {
        updatedRow.pop();
        dispatch({ type: ActionType.MoveBackward });
        dispatch({
          type: ActionType.UpdateLetter,
          payload: updatedRow.join(''),
        });
      } else if (value === 'ENTER' && state.activePosition === 5) {
        dispatch({ type: ActionType.MoveToNextRow });
      } else if (
        state.activePosition < 5 &&
        value !== '<<' &&
        value !== 'ENTER'
      ) {
        updatedRow[state.activePosition] = value;
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
