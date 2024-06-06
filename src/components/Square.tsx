import React from "react";

interface SquareProps {
  value: string;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
      className="w-32 h-32 border border-gray-400 font-bold text-5xl"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;