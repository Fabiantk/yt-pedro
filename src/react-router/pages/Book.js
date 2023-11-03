import { useOutletContext, useParams } from "react-router-dom";

export function Book() {
  const { id } = useParams();
  const context = useOutletContext();
  return <h1>Book {id} {context.hello}</h1>;
}
