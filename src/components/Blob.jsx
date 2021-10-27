import React from 'react';
import '../styles/Player.css';
import blob from '../assets/blob.png';

function Blob({ x, y, height, width }) {
  return (
    <img
      src={blob}
      style={{
        top: y + 'vh',
        left: x + 'vw',
        height: height + 'vh',
        width: width + 'vw',
      }}
      alt="The blob avatar"
      className="blob"
    />
  );
}

export default Blob;
