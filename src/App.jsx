import React, { useState } from 'react';
import Table from './components/Table';
import Movement from './components/Movement';
import Timer from './components/Timer';

function App() {
  const [stage, setStage] = useState('HomePage');
  const [collision, setCollision] = React.useState(false);

  return (
    <div>
      {stage === 'HomePage' && <Table setStage={setStage} />}
      {stage === 'Game' && (
        <>
          <Movement collision={collision} setCollision={setCollision} />
          <Timer />
        </>
      )}
    </div>
  );
}

export default App;
