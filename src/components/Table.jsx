import React from 'react';

function Table(prop) {
  const { setStage } = prop;
  const updateStage = () => setStage('Game');
  const { ...scores } = localStorage;
  const scoresArr = Object.values(scores);
  console.log(scoresArr);

  return (
    <div>
      <header>GoGoGoblin</header>
      <main className="table">
        <h1>How to play</h1>
        <ul className="instructions">
          <li>
            <p>Use the arrow keys to move around the screen</p>
          </li>
          <li>
            <p>Get into the portal before your time runs out</p>
          </li>
        </ul>
        <button onClick={updateStage} type="button">
          Start
        </button>
        <h2>Here are your previous scores!</h2>
        <ol>
          {scoresArr
            .sort((a, b) => b - a)
            .map((score, index) => (
              <li key={index}>{score}</li>
            ))}
        </ol>
      </main>
    </div>
  );
}

export default Table;
