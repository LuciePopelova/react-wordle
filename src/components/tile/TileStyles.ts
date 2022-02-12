import styled from 'styled-components';
import { TileStatusType } from '../../constants/tileConstants';
import { handleItemColor } from '../../helpers/styleHelper';

interface ITile {
  status: TileStatusType
}

export const Container = styled.div`
  display: flex;
`;

export const TileWrapper = styled.div<ITile>`
  background-color: ${(props) => handleItemColor(props.status)};
  width: 62px;
  height: 62px;
  border: 2px solid #3a3a3c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  margin: 2px;
`;