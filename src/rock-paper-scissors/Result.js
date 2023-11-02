export const Result = (props) => {
  let html = "";

  if (props.active){
    html = (
      <div className="result">
        Player : <img src={`${props.player}-emoji.png`} className="move-emoji" />
        - 
        <img src={`${props.com}-emoji.png`} className="move-emoji" /> : Com 
      </div>
    );
  }


  return html;
}