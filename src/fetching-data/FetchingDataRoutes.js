import { Routes, Route, Link } from "react-router-dom";
import { AgePredictor } from "./AgePredictor/AgePredictor";
import { CatFact } from "./catFacts/CatFact";
import { DataFetching } from "./DataFetching";
import { Navbar } from "./Navbar";

export function FetchingDataRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<DataFetching />} />
          <Route path="cat-facts" element={<CatFact />} />
          <Route path="predict-age" element={<AgePredictor />} />
        </Route>
      </Routes>
    </>
  );
}
