import data from "../data.json";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <h1>THE PLANETS</h1>
      <nav>
        <ul>
          {data.map((planet, index) => {
            return (
              <li key={index}>
                <Link to={`/${planet.name}`}>{planet.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
