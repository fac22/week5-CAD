import { useState, useEffect } from 'react';
import Goblin from './Goblin';
import Blob from './Blob';

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function Movement() {
  const [gy, setGy] = useState(4);
  const [gx, setGx] = useState(4);
  const [by, setBy] = useState(randomNumber(0, 88));
  const [bx, setBx] = useState(randomNumber(50, 88));
  const [height, setHeight] = useState(12);
  const [width, setWidth] = useState(12);

  function handleKeyDown(e) {
    if (e.keyCode === 40)
      setGy((p) => {
        if (p + 2 !== 90) {
          return p + 2;
        }
        return p;
      });

    if (e.keyCode === 38)
      setGy((p) => {
        if (p - 2 !== -2) {
          return p - 2;
        }
        return p;
      });
    if (e.keyCode === 37)
      setGx((p) => {
        if (p - 2 !== -2) {
          return p - 2;
        }
        return p;
      });
    if (e.keyCode === 39)
      setGx((p) => {
        if (p + 2 !== 90) {
          return p + 2;
        }
        return p;
      });
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  }, []);

  const blobAxes = [setBy, setBx];
  const moveSign = [
    (p) => (p + 2 <= 100 - width ? p + 2 : p),
    (p) => (p - 2 >= 0 ? p - 2 : p),
  ];

  function blobMovement() {
    const axis = blobAxes[randomNumber(0, 1)];
    const sign = moveSign[randomNumber(0, 1)];
    return axis(sign);
  }

  function blobSize() {
    setHeight((h) => (h < 50 ? h + 0.001 : h));
    setWidth((w) => (w < 50 ? w + 0.001 : w));
  }

  useEffect(() => {
    setInterval(blobSize, 1000);
  });

  useEffect(() => {
    setInterval(blobMovement, 10);
  }, []);

  return (
    <div>
      <Goblin y={gy} x={gx} />
      <Blob y={by} x={bx} height={height} width={width} />
    </div>
  );
}

export default Movement;
