import { useEffect, useState, useRef } from 'react';

function Timer() {
  const [score, setScore] = useState(1000);

  const goblinHome = useRef(false);

  useEffect(() => {
    if (!goblinHome.current) {
      const timer = setInterval(() => {
        setScore((oldScore) => oldScore - 1);
      }, 100);

      return () => clearInterval(timer);
    }
  }, []);

  const changeGoblinHome = () => {
    console.log(goblinHome.current);
    goblinHome.current = true;
    console.log(goblinHome.current);
  };

  return (
    <div>
      {score} - <button onClick={changeGoblinHome}>CLICK</button>
    </div>
  );
}

export default Timer;
