import React from 'react';
import { TileStatusType } from '../../constants/tileConstants';
import { TileWrapper } from './TileStyles';

type Props = {
  value: string;
  status: TileStatusType;
};

const Tile: React.FC<Props> = ({ value, status }) => {
  return <TileWrapper status={status}>{value}</TileWrapper>;
};

export default Tile;
