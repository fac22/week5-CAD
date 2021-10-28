import React from 'react';

function Timer({ collision, setStage, setCollision, points }) {
  const [score, setScore] = React.useState(999);
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

  return (
    <div className="flex flex--center">
      <div className="score">
        <h1>{score.toString().padStart(3, '0')}</h1>
      </div>
    </div>
  );
}

export default Timer;
