import React from 'react';
import '../styles/Player.css';
import goblin from '../assets/goblin.png';

function Movement() {
  const [positionX, setPositionX] = React.useState(50);
  const [positionY, setPositionY] = React.useState(50);

  function handleKeyDown(e) {
    console.log(e.keyCode, 'KEY HAS BEEN PRESSED');

    if (e.keyCode === 40) {
      setPositionY(positionY + 1);
      console.log('Key Down Pressed 👍 Inside useEffect');
    }

    if (e.keyCode === 38) {
      setPositionY(positionY - 1);
      console.log('Key Down Pressed 👍 Inside useEffect');
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const goblinPosition = {};

  React.useEffect(() => {
    goblinPosition.top = `${positionY}vh`;
    goblinPosition.left = `${positionX}vh`;
  }, [positionX, positionY]);

  console.log('outside effect hook', positionY);

  return (
    <img
      src={goblin}
      style={goblinPosition}
      alt="The player avatar"
      className="player"
    />
  );
}

export default Movement;
