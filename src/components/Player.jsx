import React from "react";
import { useState } from "react";

const Player = ({ name, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  return (
    <li class="m-3  flex justify-around  space-x-4 font-semibold  text-lg w-full h-[6vh] mx-auto   text-black rounded-sm  sm:space-x-0  border-solid border-fuchsia-800  ">
      {isActive ? (
        <span class="flex justify-evenly  space-x-2  p-1 outline-fuchsia-800 outline rounded-md  ">
          {isEditing ? (
            <input
              type="text"
              className="text-black rounded-md p-2 w-[40vw]   bg-playerBackgroundColor border-none outline-none "
              onChange={(e) => setPlayerName(e.target.value)}
              value={playerName}
            />
          ) : (
            <span className=" w-[40vw]">{playerName}</span>
          )}
          <span>{symbol}</span>
        </span>
      ) : (
        <span class="flex justify-evenly  space-x-2  p-1 outline-fuchsia-800   ">
          {isEditing ? (
            <input
              type="text"
              className="text-black rounded-md p-2 w-[40vw]   bg-playerBackgroundColor border-none outline-none  "
              onChange={(e) => setPlayerName(e.target.value)}
              value={playerName}
            />
          ) : (
            <span className=" w-[40vw]">{playerName}</span>
          )}
          <span>{symbol}</span>
        </span>
      )}

      <button
        class="bg-white text-black h-8  w-14 rounded-md hover:bg-fuchsia-800 hover:text-white hover:cursor-pointer hover:shadow-violet-700"
        onClick={handleClick}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
