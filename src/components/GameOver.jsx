import React from 'react';

function GameOver(prop) {
  const { setStage, points } = prop;
  const updateStage = () => setStage('HomePage');
  const playAgain = () => setStage('Game');

  return (
    <div className="flex flex--center flex--column">
      <h1>GAME OVER</h1>
      <p className="score">
        <output>Your score is {points.toString().padStart(3, '0')}</output>
      </p>
      <button onClick={updateStage} type="button">
        HOME
      </button>
      <button onClick={playAgain} type="button">
        CONTINUE?
      </button>
    </div>
  );
}

export default GameOver;
