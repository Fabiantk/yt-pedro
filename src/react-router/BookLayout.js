import { Link, Outlet } from "react-router-dom";
import "./react-router.css";

export function BookLayout() {
  return (
    <div>
      <div className="links">
        <Link className="link" to="/react-router/books/">Home</Link>
        <Link className="link" to="/react-router/books/1">
          Book 1
        </Link>
        <Link className="link" to="/react-router/books/2">
          Book 2
        </Link>
        <Link className="link" to="/react-router/books/new">
          New Book
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
