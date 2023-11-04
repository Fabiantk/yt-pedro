import { useSearchParams } from "react-router-dom";

export function SearchExample() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 0});
  const number = searchParams.get("n");

  return (
    <>
      <h1>{number}</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />

    </>
  );
}
