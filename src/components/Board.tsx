import React, { useState } from 'react';
import Square from './Square';
import Modal from './Modal';

const Board: React.FC = () => {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [isDraw, setIsDraw] = useState(false);

  const handleClick = (i: number) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) return;
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    const gameWinner = calculateWinner(newSquares);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (!newSquares.includes('')) {
      setIsDraw(true);
    }
  };

  const renderSquare = (i: number) => {
    return (
      <Square 
        value={squares[i]} 
        onClick={() => handleClick(i)} 
      />
    );
  };

  const resetGame = () => {
    setSquares(Array(9).fill(''));
    setXIsNext(true);
    setWinner(null);
    setIsDraw(false);
  };

  const status = winner 
    ? `Winner: ${winner}`
    : isDraw
      ? 'Game is a draw'
      : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div>
      <div className="status mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }, (_, i) => renderSquare(i))}
      </div>
      <button 
        className="mt-4 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
        onClick={resetGame}
      >
        Reset Game
      </button>
      {winner && (
        <Modal 
          message={`Player ${winner} wins! 🎉`} 
          onClose={resetGame} 
        />
      )}
      {isDraw && !winner && (
        <Modal 
          message="The game is a draw!" 
          onClose={resetGame} 
        />
      )}
    </div>
  );
};

const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Board;
