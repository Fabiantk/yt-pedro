import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";

export function Sidebar() {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/todolist">
        TodoList
      </Link>
      <Link className={styles.link} to="/tic-tac-toe">
        TicTacToe
      </Link>
      <Link className={styles.link} to="/rock-paper-scissors">
        Rock Paper Scissors
      </Link>
      <Link className={styles.link} to="/data-fetching">
        Fetching Data
      </Link>
      <Link className={styles.link} to="/react-router">
        React Router
      </Link>
    </header>
  );
}
