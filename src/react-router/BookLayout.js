import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import "./react-router.css";

export function BookLayout() {
  const [searchParams, setSearchparams] = useSearchParams({ n: 3 });
  const location = useLocation();
  const number = searchParams.get("n") || location.state || 3;

  return (
    <div>
      <div className="book-links">
        <NavLink className="link" to="/react-router/books/" state={number}>
          Home
        </NavLink>

        <NavLink className="link" to="/react-router/books/1" state={number}>
          Book 1
        </NavLink>

        <NavLink className="link" to="/react-router/books/2" state={number}>
          Book 2
        </NavLink>

        <NavLink
          className="link"
          to={`/react-router/books/${number}`}
          state={number}>
          Book {number}
        </NavLink>

        <NavLink className="link" to="/react-router/books/new" state={number}>
          New Book
        </NavLink>
      </div>


      <Outlet context={{ hello: "Hi" }} />

      <input
        type="number"
        value={number}
        onChange={(e) => setSearchparams({ n: e.target.value })}
      />
    </div>
  );
}
