import React from 'react';

const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const Keyboard = ({ onKeyPress }) => {
  return (
    <div className="keyboard">
      {keys.map(key => (
        <button key={key} onClick={() => onKeyPress(key)}>
          {key}
        </button>
      ))}
      <button onClick={() => onKeyPress('Backspace')}>Backspace</button>
      <button onClick={() => onKeyPress('Enter')}>Enter</button>
    </div>
  );
};

export default Keyboard;
