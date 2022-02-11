import styled from "styled-components";
import { TileStatusType } from "../../constants/tileConstants";

export const KeyboardWrapper = styled.div`
  margin-top: 3rem;
  width: 510px;
  display: flex;
  flex-wrap: wrap;
`
interface IKey {
  status: TileStatusType
}

const handleKeyColor = (status: TileStatusType) => {
  switch (status) {
    case TileStatusType.TILE_STATUS_ABSENT:
      return "#3a3a3c";
    case TileStatusType.TILE_STATUS_CORRECT:
      return "#538d4e";
    case TileStatusType.TILE_STATUS_PRESENT:
        return "#b59f3a";
    default:
      return "#121213";
  }
};

export const Button = styled.button<IKey>`
    background-color: ${(props) => handleKeyColor(props.status)};
    cursor: pointer;
    width: 43px;
    height: 58px;
    border-radius: 4px;
    border: 2px solid #3a3a3c;
    color: #ffffff;
    margin: 4px;
  }

  :nth-child(11) {
    margin-left: 30px;
  }

  :nth-child(20),
  :nth-child(28) {
  width: 68px;
`