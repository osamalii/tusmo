import React, { useState, useEffect } from 'react';
import WordRow from './WordRow';

const words = ["apple", "grape", "mango", "peach", "berry"]; // Example words

const Game = () => {
  const [currentWord, setCurrentWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guesses, setGuesses] = useState(Array(6).fill(''));
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('Vous avez 6 essais pour trouver le mot. Le mot doit commencer par la lettre donnée.');

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (gameOver) return;
      const { key } = event;

      if (key === 'Enter') {
        if (currentGuess.length === currentWord.length) {
          const newGuesses = [...guesses];
          const emptyIndex = newGuesses.findIndex(g => g === '');
          if (emptyIndex !== -1) {
            newGuesses[emptyIndex] = currentGuess;
            setGuesses(newGuesses);
            if (currentGuess === currentWord) {
              setGameOver(true);
              setMessage('You win!');
            } else if (emptyIndex === guesses.length - 1) {
              setGameOver(true);
              setMessage('Game Over!');
            }
          }
          setCurrentGuess('');
        }
      } else if (key === 'Backspace') {
        setCurrentGuess(currentGuess.slice(0, -1));
      } else if (currentGuess.length < currentWord.length && /^[a-zA-Z]$/.test(key)) {
        setCurrentGuess(currentGuess + key.toLowerCase());
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentGuess, guesses, gameOver, currentWord]);

  useEffect(() => {
    console.log("Current word to guess:", currentWord);
  }, [currentWord]);

  return (
    <div className="game">
      <h1>Tusmo Game</h1>
      <p>{message}</p>
      <div className="word-rows">
        {guesses.map((guess, index) => (
          <WordRow key={index} word={guess} solution={currentWord} isFirstRow={index === 0} />
        ))}
        {!gameOver && (
          <WordRow word={currentGuess} solution={currentWord} isFirstRow={guesses.findIndex(g => g === '') === -1} isCurrentGuess />
        )}
      </div>
      {gameOver && (
        <div className="game-over">
          <button onClick={() => window.location.reload()}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default Game;
