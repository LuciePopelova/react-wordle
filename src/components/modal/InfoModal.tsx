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
        <Tile
          id={'tile-0'}
          value="H"
          status={TileStatusType.TILE_STATUS_EMPTY}
        />
        <Tile
          id={'tile-1'}
          value="E"
          status={TileStatusType.TILE_STATUS_CORRECT}
        />
        <Tile
          id={'tile-2'}
          value="L"
          status={TileStatusType.TILE_STATUS_EMPTY}
        />
        <Tile
          id={'tile-3'}
          value="L"
          status={TileStatusType.TILE_STATUS_EMPTY}
        />
        <Tile
          id={'tile-4'}
          value="O"
          status={TileStatusType.TILE_STATUS_EMPTY}
        />
      </TilesWrapper>
      <p>The letter E is in the word and in the correct place.</p>
      <TilesWrapper>
        <Tile
          id={'tile-5'}
          value="B"
          status={TileStatusType.TILE_STATUS_EMPTY}
        />
        <Tile
          id={'tile-6'}
          value="R"
          status={TileStatusType.TILE_STATUS_EMPTY}
        />
        <Tile
          id={'tile-7'}
          value="E"
          status={TileStatusType.TILE_STATUS_EMPTY}
        />
        <Tile
          id={'tile-8'}
          value="A"
          status={TileStatusType.TILE_STATUS_EMPTY}
        />
        <Tile
          id={'tile-9'}
          value="K"
          status={TileStatusType.TILE_STATUS_PRESENT}
        />
      </TilesWrapper>
      <p>The letter K is in the word but not in the correct place.</p>
    </Modal>
  );
};

export default InfoModal;
