export enum ActionType {
  SetWord,
  SetGameIsWon,
  SaveRow,
  UpdateLetter,
  MoveForward,
  MoveBackward,
  MoveToNextRow,
  ResetGame
}

export interface SetWord {
  type: ActionType.SetWord;
  payload:  string;
}

export interface SetGameIsWon {
  type: ActionType.SetGameIsWon;
  payload:boolean;
}

export interface UpdateLetter {
  type: ActionType.UpdateLetter;
  payload:  string;
}

export interface MoveForward {
  type: ActionType.MoveForward;
}

export interface MoveBackward {
  type: ActionType.MoveBackward;
}

export interface MoveToNextRow {
  type: ActionType.MoveToNextRow;
}

export interface ResetGame {
  type: ActionType.ResetGame;
}

export interface SaveRow {
  type: ActionType.SaveRow;
  payload:string;
}

export type GameActions = SaveRow | SetGameIsWon | SetWord | UpdateLetter | MoveForward | ResetGame|  MoveBackward | MoveToNextRow;
