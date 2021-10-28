import React, { useState } from 'react';
import Table from './components/Table';
import Movement from './components/Movement';

function App() {
  const [stage, setStage] = useState('HomePage');

  return (
    <div>
      {stage === 'HomePage' && <Table setStage={setStage} />}
      {stage === 'Game' && <Movement />}
    </div>
  );
}

export default App;
