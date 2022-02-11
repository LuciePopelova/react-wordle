import styled from 'styled-components';
import { MdInfoOutline, MdReplay, MdHelp } from 'react-icons/md';

export const GameWrapper = styled.div`
  padding-top: 8vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AboutButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 4px;
  border: 2px solid #3a3a3c;
  background-color: #818384;
  font-size: 125%;
  cursor: pointer;
`

export const ActionRow = styled.div`
width: 43vh;
display:flex;
margin-bottom: 0.2rem;
flex-direction: row;
justify-content: space-between;
align-items: center;`

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const InfoIcon = styled(MdInfoOutline)`
margin-left: 0.5rem;
cursor: pointer;
width: 1.5rem;
height: 1.5rem;
`

export const RepeatIcon = styled(MdReplay)`
margin-left: 0.5rem;
cursor: pointer;
width: 1.5rem;
height: 1.5rem;
`

export const HintIcon = styled(MdHelp)`
cursor: pointer;
width: 1.5rem;
height: 1.5rem;
`