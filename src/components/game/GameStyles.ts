import { MdHelp, MdInfoOutline, MdReplay } from 'react-icons/md';
import styled, { css } from 'styled-components';

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
  align-items: center;
`

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const Icon = css`
  margin-left: 0.5rem;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`

export const InfoIcon = styled(MdInfoOutline)`
  ${Icon}
`

export const RepeatIcon = styled(MdReplay)`
  ${Icon}
`

export const HintIcon = styled(MdHelp) `
  ${Icon}
`