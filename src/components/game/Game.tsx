import { useContext, useEffect, useState } from 'react';
import { ActionType } from '../../actions/gameActions';
import { fetchData } from '../../api/api';
import { WORDS } from '../../constants/words';
import { GameContext } from '../../contexts/GameContext';
import Grid from '../grid/Grid';
import Keyboard from '../keyboard/Keyboard';
import GameFinishedModal from '../modal/GameFinishedModal';
import HintModal from '../modal/HintModal';
import InfoModal from '../modal/InfoModal';
import {
  ActionRow,
  GameWrapper,
  HintIcon,
  IconsWrapper,
  InfoIcon,
  RepeatIcon,
} from './GameStyles';

let resource = fetchData();

const Game = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [isGameFinishedModalOpen, setIsGameFinishedModalOpen] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const {
    state: { activeRow, word, guesses, numberOfHints },
    dispatch,
  } = useContext(GameContext);
  let newWord: Array<string> = [];

  if (process.env.REACT_APP_RAPID_API_KEY) {
    newWord = resource.word.read();
  }

  useEffect(() => {
    if (isResetting) {
      dispatch({ type: ActionType.ResetGame });
      setIsGameFinishedModalOpen(false);
      setIsResetting(false);

      if (process.env.REACT_APP_RAPID_API_KEY) {
        resource = fetchData();
      } else {
        newWord = [WORDS[Math.floor(Math.random() * WORDS.length)]];
      }
    }
  }, [isResetting, dispatch]);

  useEffect(() => {
    if (word !== '') {
      const isWon = guesses.some((guess) => guess === word);

      if (isWon) {
        dispatch({
          type: ActionType.SetGameIsWon,
          payload: true,
        });
        setIsGameFinishedModalOpen(true);
      }

      if (activeRow === 5) {
        dispatch({
          type: ActionType.SetGameIsWon,
          payload: guesses[activeRow] === word,
        });
        setIsGameFinishedModalOpen(true);
      }
    }
  }, [activeRow, dispatch]);

  useEffect(() => {
    if (newWord.length) {
      dispatch({ type: ActionType.SetWord, payload: newWord[0] });
    }
  }, [newWord, dispatch]);

  const handleHintModalClick = () => {
    dispatch({ type: ActionType.SetNumberOfHints });
    setIsHintModalOpen(true);
  };

  return (
    <>
      <InfoModal
        isOpen={isInfoModalOpen}
        handleClose={() => setIsInfoModalOpen(false)}
      />
      <HintModal
        isOpen={isHintModalOpen}
        handleClose={() => setIsHintModalOpen(false)}
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
            {numberOfHints > 0 && (
              <HintIcon data-cy="hint-icon" onClick={handleHintModalClick} />
            )}
            <RepeatIcon
              data-cy="repeat-icon"
              onClick={() => setIsResetting(true)}
            />
            <InfoIcon
              data-cy="info-icon"
              onClick={() => setIsInfoModalOpen(true)}
            />
          </IconsWrapper>
        </ActionRow>
        <Grid />
        <Keyboard />
      </GameWrapper>
    </>
  );
};

export default Game;
