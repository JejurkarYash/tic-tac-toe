import React from "react";

const GameOver = ({ winner, handleClick }) => {
  return (
    <div className=" container  absolute left-7 bg-containerColor  h-[40vh] w-[85vw] rounded-lg  text-center justify-center flex flex-col text-black  font-semibold  space-y-8   ">
      <h2>Game Over !</h2>
      {winner ? <h3>{winner} Won </h3> : <h3>It's a Draw</h3>}
      <p>
        <button
          className=" h-[8vh] w-[40vw] rounded-md  bg-white "
          onClick={handleClick}
        >
          Rematch
        </button>
      </p>
    </div>
  );
};

export default GameOver;
