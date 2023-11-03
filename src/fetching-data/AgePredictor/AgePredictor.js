import { useState } from "react";
import styles from "../fetching-data.module.css";
import axios from "axios";

export function AgePredictor() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState({});

  function handleChange(e){
    setName(e.target.value);
  }

  function predictAge(){
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {setInfo(res.data)});
  }

  return (
    <div className={styles.agepredictor}>
      <div className="title">Age Predictor</div>
      <input onChange={handleChange} placeholder="Name..." />
      <button onClick={predictAge}>Predict Age</button>
      <div className={styles.info}> Name: {info.name} </div>
      <div className={styles.info}> Age: {info.age} </div>
      <div className={styles.info}> Count: {info.count} </div>
    </div>
  );
}
