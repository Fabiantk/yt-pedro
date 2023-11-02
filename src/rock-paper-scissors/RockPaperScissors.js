// import "./App.css";
import "./rock-paper-scissors.css";
import { useState, useEffect } from "react";
import { Choices } from "./Choices";
import { Result } from "./Result";

function RockPaperScisccors() {
  let [player, setPlayer] = useState("");
  let [com, setCom] = useState("");
  let [active, setActive] = useState(false);
  let [result, setResult] = useState("");

  useEffect(() => {
    setResult(getResult());
  }, [player, com]);

  const playGame = (choice) => {
    const idx = Math.floor(Math.random() * 3);
    const comChoice = ["rock", "paper", "scissors"][idx];

    setCom(comChoice);
    setPlayer(choice);
    setActive(true);
  };

  const getResult = () => {
    console.log(player, com);

    if (player === com) {
      return "DRAW";
    } else if (player === "rock") {
      return com === "paper" ? "COM wins" : "Player Wins";
    } else if (player === "paper") {
      return com === "scissors" ? "COM wins" : "Player Wins";
    } else if (player === "scissors") {
      return com === "rock" ? "COM wins" : "Player Wins";
    }
  };

  return (
    <div className="rock-paper-scissors">
      <header>Pick an option</header>

      <Choices playGame={playGame} />

      <Result player={player} com={com} active={active} />

      <div>{active && result}</div>
    </div>
  );
}

export default RockPaperScisccors;
