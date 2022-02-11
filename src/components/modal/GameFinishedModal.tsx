import React, { useContext } from 'react';
import { TileStatusType } from '../../constants/tileConstants';
import { GameContext } from '../../contexts/GameContext';
import Tile from '../tile/Tile';
import Modal from './Modal';
import { ButtonWrapper, TextWrapper, TilesWrapper } from './ModalStyles';

type Props = {
  isOpen: boolean;
  isResetting: () => void;
  handleClose: () => void;
};

const GameFinishedModal: React.FC<Props> = ({
  isOpen,
  isResetting,
  handleClose,
}) => {
  const { state } = useContext(GameContext);
  const additionalText = state.isGameWon
    ? 'Do you want to win one more time?'
    : 'But don´t worry... You can try it again!';

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <h1>Game finished</h1>
      <h2>{state.isGameWon ? 'You won!' : 'You lost!'}</h2>
      <p>The word you were looking for was:</p>
      <TilesWrapper>
        {state.word.split('').map((letter, index) => (
          <Tile
            key={index}
            value={letter}
            status={TileStatusType.TILE_STATUS_CORRECT}
          />
        ))}
      </TilesWrapper>
      <TextWrapper>{additionalText}</TextWrapper>
      <ButtonWrapper onClick={isResetting}>Another round</ButtonWrapper>
    </Modal>
  );
};

export default GameFinishedModal;
