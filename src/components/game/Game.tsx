import { useCallback, useContext, useEffect, useState } from 'react';
import { ActionType } from '../../actions/gameActions';
import { fetchData } from '../../api/api';
import { GameContext } from '../../contexts/GameContext';
import Grid from '../grid/Grid';
import Keyboard from '../keyboard/Keyboard';
import GameFinishedModal from '../modal/GameFinishedModal';
import InfoModal from '../modal/InfoModal';
import {
  ActionRow,
  GameWrapper,
  IconsWrapper,
  InfoIcon,
  RepeatIcon,
} from './GameStyles';

let resource = fetchData();

const Game = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isGameFinishedModalOpen, setIsGameFinishedModalOpen] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const { state, dispatch } = useContext(GameContext);
  const word = resource.word.read();

  useEffect(() => {
    if (isResetting) {
      dispatch({ type: ActionType.ResetGame });
      setIsGameFinishedModalOpen(false);
      setIsResetting(false);
      resource = fetchData();
    }
  }, [isResetting, dispatch]);

  const onGameChange = useCallback(() => {
    if (state.word !== '') {
      const isWon = state.guesses.some((guess) => guess === state.word);
      if (isWon) {
        dispatch({
          type: ActionType.SetGameIsWon,
          payload: true,
        });
        setIsGameFinishedModalOpen(true);
      }

      if (state.activeRow === 5) {
        dispatch({
          type: ActionType.SetGameIsWon,
          payload: state.guesses[state.activeRow] === state.word,
        });
        setIsGameFinishedModalOpen(true);
      }
    }
  }, [state.activeRow]);

  useEffect(() => {
    onGameChange();
  }, [onGameChange]);

  useEffect(() => {
    if (word.length) {
      dispatch({ type: ActionType.SetWord, payload: word[0] });
    }
  }, [word, dispatch]);

  return (
    <>
      <InfoModal
        isOpen={isInfoModalOpen}
        handleClose={() => setIsInfoModalOpen(false)}
      />
      <GameFinishedModal
        isOpen={isGameFinishedModalOpen}
        handleClose={() => setIsGameFinishedModalOpen(false)}
        isResetting={() => setIsResetting(true)}
      />
      <GameWrapper>
        <ActionRow>
          <h1>Game</h1>
          <IconsWrapper>
            <RepeatIcon onClick={() => setIsResetting(true)} />
            <InfoIcon onClick={() => setIsInfoModalOpen(true)} />
          </IconsWrapper>
        </ActionRow>
        <Grid />
        <Keyboard />
      </GameWrapper>
    </>
  );
};

export default Game;
