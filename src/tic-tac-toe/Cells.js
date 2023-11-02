const Cell = (props) => {
  return <div onClick={props.handleClick} id={props.id} className="cell"></div>
}

export const Cells = (props) => {
  return (
    <div className="cells">
      <Cell handleClick={props.handleClick} id="0" />
      <Cell handleClick={props.handleClick} id="1" />
      <Cell handleClick={props.handleClick} id="2" />
      <Cell handleClick={props.handleClick} id="3" />
      <Cell handleClick={props.handleClick} id="4" />
      <Cell handleClick={props.handleClick} id="5" />
      <Cell handleClick={props.handleClick} id="6" />
      <Cell handleClick={props.handleClick} id="7" />
      <Cell handleClick={props.handleClick} id="8" />
    </div>
  );
};