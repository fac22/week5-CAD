import React from 'react';

function Timer() {
  const [score, setScore] = React.useState(1000);
  const [home, setHome] = React.useState(false);
  const [timer, setTimer] = React.useState(null);

  React.useEffect(() => {
    setTimer(
      setInterval(() => {
        setScore((oldScore) => oldScore - 1);
      }, 100)
    );

    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    if (score === 0 || home) {
      setTimer(clearInterval(timer));
    }
  }, [score, home]);

  const changeGoblinHome = () => {
    setHome(true);
  };

  return (
    <div>
      {score} - <button onClick={changeGoblinHome}>CLICK</button>
    </div>
  );
}

export default Timer;
