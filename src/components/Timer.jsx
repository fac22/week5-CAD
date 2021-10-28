import React from 'react';

function Timer({ collision, setStage, setCollision, points }) {
  const [score, setScore] = React.useState(1000);
  const [timer, setTimer] = React.useState(null);

  React.useEffect(() => {
    setTimer(
      setInterval(() => {
        setScore((oldScore) => oldScore - 1);
      }, 100)
    );

    return () => setTimer(clearInterval(timer));
  }, []);

  React.useEffect(() => {
    if (score === 0 || collision) {
      setTimer(clearInterval(timer));
      points.current = score;
      localStorage.setItem(Date.now(), JSON.stringify(points.current));
      setStage('GameOver');
      setCollision(false);
    }
  }, [score, collision]);

  return <div>{score}</div>;
}

export default Timer;
