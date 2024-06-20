// components/LoadingBar.js
import React from 'react';

const LOADING_EMOJIS = ['🌳', '🌲', '🌿', '🍃', '🍀', '🌱', '♻️', '🐢', '🐸'];

const LoadingBar = () => {
  return (
    <div className="loading-bar">
      {LOADING_EMOJIS.map((emoji, index) => (
        <span key={index}>{emoji}</span>
      ))}
    </div>
  );
};

export default LoadingBar;
