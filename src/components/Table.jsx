import React from 'react';

function Table(prop) {
  const { setStage } = prop;
  const updateStage = () => setStage('Game');
  const { ...scores } = localStorage;
  const scoresArr = Object.values(scores);
  console.log(scoresArr);

  return (
    <div className="flex flex--center flex--column">
      <header>
        <h1>GoGoGoblin</h1>
      </header>
      <div className="box flex flex--center flex--column">
        <h2>How to play</h2>
        <ul className="instructions">
          <li>
            <p>Use the arrow keys to move around the screen</p>
          </li>
          <li>
            <p>Get into the portal before your time runs out</p>
          </li>
        </ul>
        <button onClick={updateStage} type="button">
          PLAY
        </button>
        <h2>Here are your previous scores!</h2>
        <ul>
          {scoresArr
            .sort((a, b) => b - a)
            .map((score, index) => (
              <li key={index}>
                {(index + 1).toString().padStart(2, '0')} -{' '}
                {score.toString().padStart(3, '0')}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Table;
