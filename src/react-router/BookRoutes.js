import { Route, Routes } from "react-router-dom";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";
import { BookLayout } from "./BookLayout";
import { NotFound } from "./pages/NotFound";

export function BookRoutes() {
  return (
    <div>
      <Routes location="/react-router/books">
        <Route path="/" element={<h1>Extra Content</h1>} />
      </Routes>

      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
