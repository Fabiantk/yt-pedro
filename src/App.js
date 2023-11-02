import './App.css';

import Home from "./Home";
import TodoList from "./todolist/TodoList";
import RockPaperScissors from "./rock-paper-scissors/RockPaperScissors";
import TicTacToe from "./tic-tac-toe/TicTacToe";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Sidebar } from './Sidebar';
import { DataFetching } from './fetching-data/DataFetching';
import { CatFact } from './fetching-data/catFacts/CatFact';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}>
            redirect("/todolist")
          </Route>
          <Route path="/todolist" element={<TodoList />}></Route>
          <Route path="/tic-tac-toe" element={<TicTacToe />}></Route>
          <Route
            path="/rock-paper-scissors"
            element={<RockPaperScissors />}></Route>
          <Route path="/data-fetching" element={<DataFetching />}></Route>
          <Route path="/data-fetching/cat-facts" element={<CatFact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
