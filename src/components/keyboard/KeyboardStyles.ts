import styled from "styled-components";
import { TileStatusType } from "../../constants/tileConstants";
import { handleItemColor } from "../../helpers/styleHelper";

interface IKey {
  status: TileStatusType
}

export const KeyboardWrapper = styled.div`
  margin-top: 3rem;
  width: 510px;
  display: flex;
  flex-wrap: wrap;
`

export const Button = styled.button<IKey>`
    background-color: ${(props) => handleItemColor(props.status)};
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