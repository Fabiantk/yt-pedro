import { useEffect, useState } from "react";
import "./fetching-data.css";
import axios from "axios";
import { CatFact } from "./catFacts/CatFact";

import { BrowserRouter as Routes, Route, Link } from 'react-router-dom'


export function DataFetching() {
  return (
    <div className="fetching-data">
      <h1>Fetching Data</h1>
      <Navbar />
    </div>
  );
}

function Navbar(){
  return (
    <div>
      <Link to="/data-fetching/cat-facts">Cat Facts</Link>
    </div>
  );
}
