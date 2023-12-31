import { useEffect, useState } from "react";
import "./catfact.css";
import axios from "axios";

export function CatFact() {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    getCatFact();
  }, []);

  function getCatFact() {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => setCatFact(res.data.fact));
  }

  return (
    <div className="catFacts">
      <h2>Cat Facts</h2>
      <button onClick={getCatFact}>Generate Cat Fact</button>
      <div> {catFact} </div>
    </div>
  );
}
