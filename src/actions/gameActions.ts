export enum ActionType {
  MoveBackward,
  MoveForward,
  MoveToNextRow,
  ResetGame,
  SetGameIsWon,
  SetNumberOfHints,
  SaveRow,
  SetWord,
  UpdateLetter
}

export interface MoveBackward {
  type: ActionType.MoveBackward;
}

export interface MoveForward {
  type: ActionType.MoveForward;
}

export interface MoveToNextRow {
  type: ActionType.MoveToNextRow;
}

export interface ResetGame {
  type: ActionType.ResetGame;
}

export interface SaveRow {
  type: ActionType.SaveRow;
  payload: string;
}

export interface SetGameIsWon {
  type: ActionType.SetGameIsWon;
  payload:boolean;
}

export interface SetNumberOfHints {
  type: ActionType.SetNumberOfHints;
}

export interface SetWord {
  type: ActionType.SetWord;
  payload:  string;
}

export interface UpdateLetter {
  type: ActionType.UpdateLetter;
  payload:  string;
}

export type GameActions = MoveBackward | MoveForward | MoveToNextRow | ResetGame | SetGameIsWon | SetNumberOfHints | SaveRow | SetWord | UpdateLetter  ;
