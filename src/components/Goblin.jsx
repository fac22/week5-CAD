import React from 'react';
import '../styles/Player.css';
import goblin from '../assets/goblin.png';

function Goblin({ x, y }) {
  return (
    <img
      src={goblin}
      style={{ top: y + 'vh', left: x + 'vh' }}
      alt="The player avatar"
      className="player"
    />
  );
}

export default Goblin;
