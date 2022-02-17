import { createContext, Dispatch, Reducer, useReducer } from 'react';
import { ActionType, GameActions } from '../actions/gameActions';

type GameProviderProps = { children: React.ReactNode };

type State = {
  word: string;
  guesses: Array<string>;
  activeRow: number;
  activePosition: number;
  isGameWon: boolean;
  numberOfHints: number;
};

type ContextProps = {
  state: State;
  dispatch: Dispatch<GameActions>;
};

const initialState: State = {
  word: '',
  guesses: Array(5).fill(''),
  activeRow: 0,
  activePosition: 0,
  isGameWon: false,
  numberOfHints: 3,
};

const GameContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => undefined,
});

const gameReducer: Reducer<State, GameActions> = (state, action) => {
  switch (action.type) {
    case ActionType.SetWord: {
      return {
        ...state,
        word: action.payload.toUpperCase(),
      };
    }
    case ActionType.SaveRow: {
      const updatedTiles = state.guesses.concat(action.payload);
      return {
        ...state,
        guesses: updatedTiles,
      };
    }
    case ActionType.UpdateLetter: {
      const updatedGuesses = [...state.guesses];
      updatedGuesses.splice(state.activeRow, 1, action.payload);
      return {
        ...state,
        guesses: updatedGuesses,
      };
    }
    case ActionType.MoveBackward: {
      return {
        ...state,
        activePosition: state.activePosition - 1,
      };
    }
    case ActionType.MoveForward: {
      return {
        ...state,
        activePosition: state.activePosition + 1,
      };
    }
    case ActionType.MoveToNextRow: {
      return {
        ...state,
        activeRow: state.activeRow + 1,
        activePosition: 0,
      };
    }
    case ActionType.SetGameIsWon: {
      return {
        ...state,
        isGameWon: action.payload,
      };
    }
    case ActionType.SetNumberOfHints: {
      return {
        ...state,
        numberOfHints: state.numberOfHints - 1,
      };
    }
    case ActionType.ResetGame: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

const GameProvider = ({ children }: GameProviderProps) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
