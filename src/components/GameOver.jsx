import React from 'react';

function GameOver(prop) {
  const { setStage } = prop;
  const updateStage = () => setStage('HomePage');
  const playAgain = () => setStage('Game');

  return (
    <div>
      <header>GoGoGoblin</header>
      <main className="game-over">
        <h1>GAME OVER</h1>
        <p className="score">Your score is </p>
        <button onClick={updateStage} type="button">
          Home Page
        </button>
        <button onClick={playAgain} type="button">
          Play Again
        </button>
      </main>
    </div>
  );
}

export default GameOver;
