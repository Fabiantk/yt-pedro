
export const Choices = (props) => {
  return (
    <div className="choices">
      <button onClick={() => props.playGame("rock")}>
        <img src="rock-emoji.png" className="move-emoji" />
      </button>
      <button onClick={() => props.playGame("paper")}>
        <img src="paper-emoji.png" className="move-emoji" />
      </button>
      <button onClick={() => props.playGame("scissors")}>
        <img src="scissors-emoji.png" className="move-emoji" />
      </button>
    </div>
  );
}
