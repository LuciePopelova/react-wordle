import { TileStatusType } from "../constants/tileConstants";

export const handleItemColor = (status: TileStatusType) => {
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
