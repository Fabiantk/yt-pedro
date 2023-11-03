import styles from "./fetching-data.module.css";
import { Link, Outlet } from 'react-router-dom'


export function DataFetching() {
  return (
    <div className={styles.fetchingData}>
      <h1>Fetching Data</h1>
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
}

function Navbar(){
  return (
    <div>
      <Link className={styles.link} to="/data-fetching">
        Home
      </Link>
      <Link className={styles.link} to="/data-fetching/cat-facts">
        Cat Facts
      </Link>
      <Link className={styles.link} to="/data-fetching/predict-age">
        Age Predictor
      </Link>
    </div>
  );
}
