// import "./App.css";
import { Cells } from "./Cells";
import { useState, useEffect } from "react";
import "./tic-tac-toe.css"
import { redirect } from "react-router-dom";

function TicTacToe() {
  const winConditions = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6], // columns
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8], // diagonals
    [2, 4, 6],
  ];

  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState("");
  // const [winner, setWinner] = useState("");
  const [running, setRunning] = useState(true);
  // const [winCells, setWinCells] = useState([]);
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);

  const handleClick = (event) => {
    setPlayer(player === "X" ? "O" : "X");

    if (event.target.innerText === "" && running) {
      event.target.innerText = player;

      const id = Number(event.target.id);
      cells[id] = player;
      setCells(cells);

      checkWinner();
    }
  };

  const checkWinner = () => {
    let roundWon = false;
    let cellA, cellB, cellC;
    let condition;

    for (let i = 0; i < winConditions.length; i++) {
      condition = winConditions[i];
      cellA = cells[condition[0]];
      cellB = cells[condition[1]];
      cellC = cells[condition[2]];

      if (cellA == "" || cellB == "" || cellC == "") {
        continue;
      } else if (cellA == cellB && cellB == cellC) {
        roundWon = true;
        console.log(cellA);
        break;
      }
    }

    if (roundWon) {
      let conditions = [condition[0], condition[1], condition[2]]
      
      conditions.forEach((i) => {
          document.getElementById(i).style.backgroundColor = "lightgreen";
        }
      );

      // console.log(conditions)
      setResult(`${cellA} Wins`);

      setRunning(false);
    } else if (!cells.includes("")) {
      setResult("DRAW!");
    }
  };

  return (
    <div className="TicTacToe">
      <div className="header">Tic-Tac-Toe</div>

      <Cells handleClick={handleClick} />

      <div className="result"> {result} </div>

      <button onClick={() => {
        window.location.reload(false);
      }}>Restart</button>
    </div>
  );
}

export default TicTacToe;
