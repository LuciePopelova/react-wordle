import React, { useContext, useEffect } from 'react';
import { ActionType } from '../../actions/gameActions';
import { TileStatusType } from '../../constants/tileConstants';
import { GameContext } from '../../contexts/GameContext';
import Tile from '../tile/Tile';
import Modal from './Modal';
import { TextWrapper, TilesWrapper } from './ModalStyles';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const HintModal: React.FC<Props> = ({ isOpen, handleClose }) => {
  const {
    state: { word, numberOfHints },
    dispatch,
  } = useContext(GameContext);
  const generatedLetterId = Math.floor(Math.random() * 5);

  useEffect(() => {
    if (isOpen) {
      dispatch({ type: ActionType.SetNumberOfHints });
    }
  }, [isOpen, dispatch]);

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <h1>Do you need hint?</h1>
      <p>What about you try this letter?</p>
      <TilesWrapper>
        <Tile
          key={generatedLetterId}
          value={word[generatedLetterId]}
          status={TileStatusType.TILE_STATUS_PRESENT}
        />
      </TilesWrapper>
      <TextWrapper>You have {numberOfHints} hints left.</TextWrapper>
    </Modal>
  );
};

export default HintModal;
