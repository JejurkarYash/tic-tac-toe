import { React, useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winningCombination.js";
import GameOver from "./components/GameOver.jsx";

const PLAYER = {
  X: "player 1",
  O: "player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// function for returning the active player
function deriveActivePlayer(gameTurn) {
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player == "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

// function for calculating the winner
function deriveWinner(gameBoard, players) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    const firtstSquareSymbol = gameBoard[a.row][a.col];
    const secondSquareSymbol = gameBoard[b.row][b.col];
    const thirdSquareSymbol = gameBoard[c.row][c.col];

    if (
      firtstSquareSymbol &&
      firtstSquareSymbol === secondSquareSymbol &&
      firtstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firtstSquareSymbol];
      break;
    }
  }
  return winner;
}

// function for getting the button which is click on game board
function deriveGameBoard(gameTurn) {
  let gameBoard = INITIAL_GAME_BOARD.map((row) => [...row]);
  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

// App.jsx
const App = () => {
  // States
  const [gameTurn, setGameTurn] = useState([]);
  const [players, setPlayers] = useState(PLAYER);

  let gameBoard = deriveGameBoard(gameTurn);
  const activePlayer = deriveActivePlayer(gameTurn);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurn.length === 9 && !winner;

  // function for getting the player name
  function handlePlayerName(symbol, playerName) {
    setPlayers((prevPlayer) => {
      return {
        ...prevPlayer,
        [symbol]: playerName,
      };
    });
    console.log(players);
  }

  // function for handling the Rematch button
  function handleClick() {
    setGameTurn([]);
    gameBoard = [...INITIAL_GAME_BOARD].map((array) => [...array]);
  }

  // function for getting the active plalyer name and symbol
  function handleActivePlayer(row, col) {
    setGameTurn((prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn);
      const updatedTurns = [
        { square: { row: row, col: col }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurns;
    });
  }
  return (
    <main className=" flex  flex-col  justify-center space-y-8 align-center items-center sm:justify-center sm:align-center sm:text-center    ">
      <div className="container    bg-containerColor h-[20vh] w-[80vw] rounded-xl  p-2 sm:w-[60vw] sm:h-[10vh] sm:  ">
        <ol className=" sm:flex sm:justify-evenly    ">
          <Player
            name={PLAYER.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerName}
          />
          <Player
            name={PLAYER.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerName}
          />
        </ol>
      </div>
      <div className=" container bg-containerColor h-[40vh] w-[80vw]  sm:w-[70vw] flex justify-center  items-center align-center p-2 m-1 pl-3 rounded-xl text-xl ">
        <GameBoard
          handleActive={(row, col) => handleActivePlayer(row, col)}
          gameBoard={gameBoard}
        />
        {(winner || hasDraw) && (
          <GameOver winner={winner} handleClick={handleClick} />
        )}
      </div>
      <div>
        <Log turn={gameTurn} />
      </div>
    </main>
  );
};

export default App;
