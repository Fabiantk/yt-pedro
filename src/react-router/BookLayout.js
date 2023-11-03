import { Link, NavLink, Outlet } from "react-router-dom";
import "./react-router.css";

export function BookLayout() {
  return (
    <div>
      <div className="book-links">
        <NavLink className="link" to="/react-router/books/">Home</NavLink>
        <NavLink className="link" to="/react-router/books/1">
          Book 1
        </NavLink>
        <NavLink className="link" to="/react-router/books/2">
          Book 2
        </NavLink>
        <NavLink className="link" to="/react-router/books/new">
          New Book
        </NavLink>
      </div>
      <Outlet context={{hello: "Hello World"}}/>
    </div>
  );
}
