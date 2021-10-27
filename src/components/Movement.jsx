import { useState, useEffect } from 'react';
import Goblin from './Goblin';

function Movement() {
  const [y, setY] = useState(4);
  const [x, setX] = useState(4);

  function handleKeyDown(e) {
    if (e.keyCode === 40)
      setY((p) => {
        if (p + 2 !== 90) {
          return p + 2;
        }
        return p;
      });

    if (e.keyCode === 38)
      setY((p) => {
        if (p - 2 !== -2) {
          return p - 2;
        }
        return p;
      });
    if (e.keyCode === 37)
      setX((p) => {
        if (p - 2 !== -2) {
          return p - 2;
        }
        return p;
      });
    if (e.keyCode === 39)
      setX((p) => {
        if (p + 2 !== 90) {
          return p + 2;
        }
        return p;
      });
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div>
      <Goblin y={y} x={x} />
    </div>
  );
}

export default Movement;
