import styled from 'styled-components';
import { TileStatusType } from '../../constants/tileConstants';

interface ITile {
  status: TileStatusType
}

const handleTileColor = (status: TileStatusType) => {
  switch (status) {
    case TileStatusType.TILE_STATUS_ABSENT:
      return "#3a3a3c";
    case TileStatusType.TILE_STATUS_CORRECT:
      return "#538d4e";
    case TileStatusType.TILE_STATUS_PRESENT:
        return "#b59f3a";
    default:
      return "";
  }
};

export const Container = styled.div`
  display: flex;
`;

export const TileWrapper = styled.div<ITile>`
  background-color: ${(props) => handleTileColor(props.status)};
  width: 62px;
  height: 62px;
  border: 2px solid #3a3a3c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  margin: 2px;
`;