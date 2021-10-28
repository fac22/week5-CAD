import React from 'react';
import Goblin from './Goblin';
import Blob from './Blob';

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function Movement() {
  const [gy, setGy] = React.useState(4);
  const [gx, setGx] = React.useState(4);
  const [by, setBy] = React.useState(randomNumber(0, 88));
  const [bx, setBx] = React.useState(randomNumber(50, 88));

  function handleKeyDown(e) {
    if (e.keyCode === 38) setGy((y) => (y - 2 !== -2 ? y - 2 : y)); // up
    if (e.keyCode === 40) setGy((y) => (y + 2 !== 92 ? y + 2 : y)); // down
    if (e.keyCode === 37) setGx((x) => (x - 2 !== -2 ? x - 2 : x)); // left
    if (e.keyCode === 39) setGx((x) => (x + 2 !== 92 ? x + 2 : x)); // right
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  }, []);

  const blobAxes = [setBy, setBx];
  const moveSign = [
    (p) => (p + 2 <= 100 - 20 ? p + 1 : p),
    (p) => (p - 2 >= 0 ? p - 1 : p),
  ];

  function blobMovement() {
    const axis = blobAxes[randomNumber(0, 1)];
    const sign = moveSign[randomNumber(0, 1)];
    return axis(sign);
  }

  React.useEffect(() => {
    setInterval(blobMovement, 1);
  }, []);

  return (
    <div>
      <Goblin y={gy} x={gx} />
      <Blob y={by} x={bx} />
    </div>
  );
}

export default Movement;
