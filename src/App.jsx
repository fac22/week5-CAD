import React, { useState } from 'react';
import Table from './components/Table';
import Movement from './components/Movement';
import Timer from './components/Timer';
import GameOver from './components/GameOver';

function App() {
  const [stage, setStage] = useState('HomePage');
  const [collision, setCollision] = React.useState(false);

  const points = React.useRef(0);

  return (
    <div>
      {stage === 'HomePage' && <Table setStage={setStage} />}
      {stage === 'Game' && (
        <>
          <Movement collision={collision} setCollision={setCollision} />
          <Timer
            collision={collision}
            setStage={setStage}
            setCollision={setCollision}
            points={points}
          />
        </>
      )}
      {stage === 'GameOver' && (
        <GameOver points={points.current} setStage={setStage} />
      )}
    </div>
  );
}

export default App;
