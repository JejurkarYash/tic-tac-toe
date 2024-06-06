import { React, useState } from "react";
// import { preprocessCSS } from "vite";

const GameBoard = ({ handleActive, gameBoard }) => {
  return (
    <ol className=" flex  ">
      {gameBoard.map((row, rowIndx) => (
        <li key={rowIndx}>
          <ol>
            {row.map((playerSymbol, indx) => (
              <button
                key={indx}
                className="  bg-boardColor text-black m-2 h-[9vh] w-[18vw] font-semibold rounded-sm text-3xl   "
                onClick={() => handleActive(rowIndx, indx)}
                disabled={playerSymbol !== null}
              >
                {playerSymbol}
              </button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
