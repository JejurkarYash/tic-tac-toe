import React from "react";

const Log = ({ turn }) => {
  return (
    <ol className=" text-black font-medium ">
      {turn.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
