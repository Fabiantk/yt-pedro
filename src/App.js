import './App.css';

import Home from "./Home";
import TodoList from "./todolist/TodoList";
import RockPaperScissors from "./rock-paper-scissors/RockPaperScissors";
import TicTacToe from "./tic-tac-toe/TicTacToe";
import { Routes, Route} from "react-router-dom";
import { Sidebar } from './Sidebar';
import { ReactRouter } from './react-router/ReactRouter';
import { NotFound } from "./react-router/pages/NotFound";
import { FetchingDataRoutes } from './fetching-data/FetchingDataRoutes'
import { BookRoutes } from './react-router/BookRoutes';
import { SearchExample } from './react-router/SearchExample';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
        <Route path="/data-fetching/*" element={<FetchingDataRoutes />} />
        <Route path="/react-router">
          <Route index element={<ReactRouter />} />
          <Route path="books/*" element={<BookRoutes />} />
          <Route path="search-example" element={<SearchExample />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
