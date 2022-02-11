import { TileStatusType } from '../../constants/tileConstants';
import Tile from '../tile/Tile';
import Modal from './Modal';
import { TilesWrapper } from './ModalStyles';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const InfoModal: React.FC<Props> = ({ isOpen, handleClose }) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <h1>About this game</h1>
      <p>
        You have 5 tries to guess the word. After each guess, the background of
        the tiles will change and show you if you were close to the guessing
        word.
      </p>
      <TilesWrapper>
        <Tile value="H" status={TileStatusType.TILE_STATUS_EMPTY} />
        <Tile value="E" status={TileStatusType.TILE_STATUS_CORRECT} />
        <Tile value="L" status={TileStatusType.TILE_STATUS_EMPTY} />
        <Tile value="L" status={TileStatusType.TILE_STATUS_EMPTY} />
        <Tile value="O" status={TileStatusType.TILE_STATUS_EMPTY} />
      </TilesWrapper>
      <p>The letter E is in the word and in the correct place.</p>
      <TilesWrapper>
        <Tile value="B" status={TileStatusType.TILE_STATUS_EMPTY} />
        <Tile value="R" status={TileStatusType.TILE_STATUS_EMPTY} />
        <Tile value="E" status={TileStatusType.TILE_STATUS_EMPTY} />
        <Tile value="A" status={TileStatusType.TILE_STATUS_EMPTY} />
        <Tile value="K" status={TileStatusType.TILE_STATUS_PRESENT} />
      </TilesWrapper>
      <p>The letter K is in the word but not in the correct place.</p>
    </Modal>
  );
};

export default InfoModal;
