import { Link } from "react-router-dom"

export function Nav(){
  return (
    <div className="links">
      <Link to="/react-router/books">Books</Link>
      <Link to="/react-router/search-example">Search Example</Link>
    </div>
  );
}