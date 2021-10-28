import React from 'react';
import Goblin from './Goblin';
import Blob from './Blob';

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function Movement({ collision, setCollision }) {
  const [gy, setGy] = React.useState(4);
  const [gx, setGx] = React.useState(4);
  const [by, setBy] = React.useState(randomNumber(0, 80));
  const [bx, setBx] = React.useState(randomNumber(50, 80));
  const [portalMove, setPortalMove] = React.useState(null);

  React.useEffect(() => {
    const goblinCentrePoint = { x: gx + 10 / 2, y: gy + 10 / 2 };
    const portalBox = {
      // topLeft: {x: bx + 5, y: by + 5},
      // topRight: {x: bx + 15, y: by + 5},
      // bottomLeft: {x: bx + 5, y: by + 15},
      // bottomRight: {x: bx + 15, y: by + 15},
      yMin: by + 5,
      yMax: by + 15,
      xMin: bx + 5,
      xMax: bx + 15,
    };
    if (
      goblinCentrePoint.y <= portalBox.yMax &&
      goblinCentrePoint.y >= portalBox.yMin &&
      goblinCentrePoint.x <= portalBox.xMax &&
      goblinCentrePoint.x >= portalBox.xMin
    )
      setCollision(true);
  }, [gy, gx, by, bx]);

  function handleKeyDown(e) {
    console.log('key press');
    if (e.keyCode === 38) setGy((y) => (y - 2 !== -2 ? y - 2 : y)); // up
    if (e.keyCode === 40) setGy((y) => (y + 2 !== 92 ? y + 2 : y)); // down
    if (e.keyCode === 37) setGx((x) => (x - 2 !== -2 ? x - 2 : x)); // left
    if (e.keyCode === 39) setGx((x) => (x + 2 !== 92 ? x + 2 : x)); // right
  }

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
    console.log('portal start');
    setPortalMove(setInterval(blobMovement, 1));
    window.addEventListener('keydown', handleKeyDown);
    console.log('start listen for keys');

    return () => window.removeEventListener();
  }, []);

  React.useEffect(() => {
    if (collision) {
      console.log('GAME!');
      setPortalMove(clearInterval(portalMove));
      window.removeEventListener('keydown', handleKeyDown);
      console.log('should remove keys');
    }
  }, [collision]);

  return (
    <div>
      <Blob y={by} x={bx} />
      {!collision ? <Goblin y={gy} x={gx} /> : null}
    </div>
  );
}

export default Movement;
