import React from 'react';
import { TileStatusType } from '../../constants/tileConstants';
import { TileWrapper } from './TileStyles';

type Props = {
  id: string;
  status: TileStatusType;
  value: string;
};

const Tile: React.FC<Props> = ({ id, status, value }) => {
  return (
    <TileWrapper data-cy={id} status={status}>
      {value}
    </TileWrapper>
  );
};

export default Tile;
