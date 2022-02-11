import { GameProvider } from './contexts/GameContext';
import { Suspense } from 'react';
import Game from './components/game/Game';
import Loader from './components/loader/Loader';

function App() {
  return (
    <GameProvider>
      <Suspense fallback={<Loader />}>
        <Game />
      </Suspense>
    </GameProvider>
  );
}

export default App;
