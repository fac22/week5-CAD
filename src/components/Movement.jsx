import { useState, useEffect } from 'react';
import Goblin from './Goblin';

function Movement() {
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);

  function handleKeyDown(e) {
    if (e.keyCode === 40) setY((p) => p + 2);
    if (e.keyCode === 38) setY((p) => p - 2);
    if (e.keyCode === 37) setX((p) => p - 2);
    if (e.keyCode === 39) setX((p) => p + 2);
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div>
      <Goblin y={y} x={x} />;
    </div>
  );
}

export default Movement;
