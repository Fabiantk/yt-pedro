import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";

export function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink className="link" to="/">
        Home
      </NavLink>
      <NavLink className="link" to="/todolist">
        TodoList
      </NavLink>
      <NavLink className="link" to="/tic-tac-toe">
        TicTacToe
      </NavLink>
      <NavLink className="link" to="/rock-paper-scissors">
        Rock Paper Scissors
      </NavLink>
      <NavLink className="link" to="/data-fetching">
        Fetching Data
      </NavLink>
      <NavLink className="link" to="/react-router">
        React Router
      </NavLink>
    </div>
  );
}
