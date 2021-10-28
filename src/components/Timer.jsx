import { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [score, setscore] = useState(100000);

  useEffect(() => {
    const timer = setTimeout(() => setscore((oldScore) => oldScore - 1), 10);
  }, [score]);

  console.log(score);

  return (
    <div className="App">
      <div> {score}</div>
    </div>
  );
};

export default Timer;
