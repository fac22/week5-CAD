import React from 'react';

function Table(prop) {
  const { setStage } = prop;
  const updateStage = () => setStage('Game');

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
      </main>
    </div>
  );
}

export default Table;
