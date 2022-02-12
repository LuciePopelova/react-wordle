import React from 'react';
import { TileStatusType } from '../../constants/tileConstants';
import { TileWrapper } from './TileStyles';

type Props = {
  status: TileStatusType;
  value: string;
};

const Tile: React.FC<Props> = ({ status, value }) => {
  return <TileWrapper status={status}>{value}</TileWrapper>;
};

export default Tile;
