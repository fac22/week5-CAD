import React, { useState } from 'react';
import Table from './components/Table';
import Movement from './components/Movement';
import Timer from './components/Timer';

function App() {
  const [stage, setStage] = useState('HomePage');

  return (
    <div>
      {stage === 'HomePage' && <Table setStage={setStage} />}
      {stage === 'Game' && <Movement /><Timer />}
    </div>
  );
}

export default App;
