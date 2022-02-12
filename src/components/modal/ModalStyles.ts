import { MdClose } from 'react-icons/md';
import styled from "styled-components";

interface IModalOpen {
  isOpen: boolean
}

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div<IModalOpen>`
  width: 600px;
  height: 380px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #1b1b1c;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  h1 {
    margin-top: 0.5rem;
  }
  p {
    margin-bottom: 1rem;
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  color: black;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const TilesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  `

  export const TextWrapper = styled.p`
  margin-top: 1rem;
  `

  export const ButtonWrapper = styled.button`
  padding: 1rem 2rem;
  background: #141414;
  font-size: 125%;
  color: #fff;
  border: none;
  cursor:pointer;
  border-radius: 10px;
  border: 2px solid #3a3a3c;
  `