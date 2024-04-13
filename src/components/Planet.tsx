import data from "../data.json";
import { useParams } from "react-router";
export default function Planet() {
  const params = useParams();
  const planetName = params.planet;

  const planet = data.find((planetObj) => planetObj.name === planetName);
  console.log(planet);
  return <div></div>;
}
